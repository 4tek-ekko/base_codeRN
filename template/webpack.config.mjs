import path from 'path'
import TerserPlugin from 'terser-webpack-plugin'
import * as Repack from '@callstack/repack'

const STANDALONE = Boolean(process.env.STANDALONE)
export default env => {
  const {
    mode = 'development',
    context = Repack.getDirname(import.meta.url),
    entry = './index.js',
    platform = process.env.PLATFORM,
    minimize = mode === 'production',
    devServer = undefined,
    bundleFilename = undefined,
    sourceMapFilename = undefined,
    assetsPath = undefined,
    reactNativePath = new URL('./node_modules/react-native', import.meta.url)
      .pathname,
  } = env
  const dirname = Repack.getDirname(import.meta.url)

  if (!platform) {
    throw new Error('Missing platform')
  }
  process.env.BABEL_ENV = mode

  return {
    mode,
    devtool: false,
    context,
    entry: [
      ...Repack.getInitializationEntries(reactNativePath, {
        hmr: devServer && devServer.hmr,
      }),
      entry,
    ],
    resolve: {
      ...Repack.getResolveOptions(platform),
    },
    output: {
      clean: true,
      path: path.join(dirname, 'build', platform),
      filename: 'index.bundle',
      chunkFilename: '[name].chunk.bundle',
      publicPath: Repack.getPublicPath({ platform, devServer }),
    },
    optimization: {
      minimize,
      minimizer: [
        new TerserPlugin({
          test: /\.(js)?bundle(\?.*)?$/i,
          extractComments: false,
          terserOptions: {
            format: {
              comments: false,
            },
          },
        }),
      ],
      chunkIds: 'named',
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          include: [
            /node_modules(.*[/\\])+react/,
            /node_modules(.*[/\\])+@react-native/,
            /node_modules(.*[/\\])+@react-navigation/,
            /node_modules(.*[/\\])+@react-native-community/,
            /node_modules(.*[/\\])+@expo/,
            /node_modules(.*[/\\])+pretty-format/,
            /node_modules(.*[/\\])+metro/,
            /node_modules(.*[/\\])+abort-controller/,
            /node_modules(.*[/\\])+@callstack\/repack/,
          ],
          use: 'babel-loader',
        },
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              /** Add React Refresh transform only when HMR is enabled. */
              plugins:
                devServer && devServer.hmr
                  ? ['module:react-refresh/babel']
                  : undefined,
            },
          },
        },
        {
          test: Repack.getAssetExtensionsRegExp(
            Repack.ASSET_EXTENSIONS.filter(ext => ext !== 'svg'),
          ),
          use: {
            loader: '@callstack/repack/assets-loader',
            options: {
              platform,
              inline: true,
              devServerEnabled: Boolean(devServer),
              scalableAssetExtensions: Repack.SCALABLE_ASSETS,
            },
          },
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                native: true,
                dimensions: false,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new Repack.RepackPlugin({
        context,
        mode,
        platform,
        devServer,
        output: {
          bundleFilename,
        },
      }),
      new Repack.plugins.ModuleFederationPlugin({
        name: 'ProjectName',
        exposes: {
          './App': './src/ProjectName.js',
        },
        shared: {
          react: {
            ...Repack.Federated.SHARED_REACT,
            requiredVersion: '18.0.0',
          },
          'react-native': {
            ...Repack.Federated.SHARED_REACT_NATIVE,
            requiredVersion: '0.69.3',
          },
          'react-native-super-app-sdk': {
            singleton: true,
            eager: true,
            requiredVersion: '0.0.1',
          },
        }
      }),
    ],
  }
}
