# React Native 4Tech Boilerplate

## Table of contents

1. [Getting Started](#point_right-getting-started)
2. [Feature](#star-feature)
3. [Folder Structure](#file_folder-folder-structure)
4. [Enviroment](#file_folder-environment)
5. [Usage](#fire-usage)

### :point_right: Getting Started

##### - <a href="#file_folder-folder-structure">Setup React Native Enviroment</a> (required)

##### - Init Project

```sh
npx react-native init [APP_NAME] --template https://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:x-oauth-basic@github.com/hikocom/frw_brand_mobile.git
```

##### - Run Project

```sh
cd [APP_NAME]
yarn ios # for ios
yarn android # for android
```

##### - Generator

- Generate Screen: `yarn generate screen [SCREEN_NAME]`
- Generate Component: `yarn generate component [COMPONENT_NAME]`
- Generate Store: `yarn generate store [STORE_NAME]`
- Generate Model: `yarn generate model [MODEL_NAME]`
- Generate Util: `yarn generate util [UTIL_NAME]`
- Generate Language: `yarn generate language [LANGUAGE_CODE]`

##### - Optimization Script

Finding unsed packages, components, screens, svg component

```sh
yarn optimise
```

##### - API Config

- Update endpoints in `src/Services/EndPoint.js`
- Update BASE_URL, API_URL,... in `Config/index.js `

##### - Setup Fonts, Images, Svg (<a href="#2-assets">here</a>)

##### - Setup CodePush, FastLane (<a href="#10config-codepush--fastlane">here</a>)

##### - Mobx Guide (<a href="#7-stores">here</a>)

##### - Navigatiors Guide (<a href="#5-navigators">here</a>)

##### - Language Guide (<a href="#8-translations">here</a>)

##### - Theme Guide (<a href="#11-theme">here</a>)

### :star: Feature

- React Native v0.69.3
- Mobx
- React Native MMKV
- ReAnimated v2
- React Native Gesture Handler
- Light/Dark Theme (`types support`)
- React Navigation V6
- React i18n (`types support`)
- XStyleSheet (`types support`)
- React Native Svg
- Built-in Components and Utils
- Built-in Screens (Splash, NoInternet, InAppUpdate,)
- Example Components Usage (AppButton, AppInput, AppText, etc.)
- <a href="#fire-bet-app-core">Core</a> APIs, Stores, Bussiness Logic, UI for betting app

### :file_folder: Folder Structure

- <a href="#2-assets">Assets</a> (Svg, Image, Fonts)</i>
- <a href="#3-components">Components</a> <i>(Built-in Components)</i>
- <a href="#4-config">Config</a> <i>(PageName, AppConfig)</i>
- <a href="#9-utils--hooks">Hooks</a> <i>(useAppTheme & other hooks)</i>
- <a>Models</a> <i>(Constants & App data)</i>
- <a href="#5-navigators">Navigators</a> <i>(Navigators & Utils)</i>
- <a href="../../tree/develop/template/src/Screens">Screens</a> <i>(Screens & Screen Components)</i>
- <a href="#6-services">Services</a> <i>(API)</i>
- <a href="#7-stores">Stores</a> <i>(Stores & Persist Logic)</i>
- <a href="#11-theme">Theme</a> <i>(Theme,Layout,Fonts,Responsive)</i>
- <a href="#8-translations">Translations</a> <i>(i18n & language data)</i>
- <a href="#9-utils--hooks">Utils</a> <i>(Device,Number,String,Validator helpers)</i>

### :file_folder: Environment

- <a href="https://nodejs.org/en/">Node</a> v12: 18.6.0 or higher
- <a href="https://yarnpkg.com/getting-started">Yarn</a> 1.22.19 or higher
- <a href="https://www.npmjs.com/package/@react-native-community/cli">React Native Cli</a>: 2.0.1 or higher
- <a href="https://reactnative.dev/docs/environment-setup">Java JDK</a> : 1.8.0_291 or higher
- <a href="https://reactnative.dev/docs/environment-setup">Open JDK</a> : 11.0.15
- <a href="https://reactnative.dev/docs/environment-setup">Open JDK Runtime</a> Zulu11.56+19-CA
- <a href="https://www.ruby-lang.org/en/">Ruby</a> : 2.7.5 or higher
- <a href="https://cocoapods.org/">Cocoapods</a> : 1.11.1 or higher
- <a href="https://developer.apple.com/xcode/">XCode</a> : 13.0.1 or higher
- <a href="https://developer.android.com/studio">Android Studio</a> : version 2021
  =>> <a href="https://reactnative.dev/docs/environment-setup">Setup React Native Enviroment</a>

### :fire: Usage

#### 1. Scripts

| Name                      |                                                                                                                Example                                                                                                                | Description                                                         |
| ------------------------- | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------ |
| Start                     |                                                                                                             `yarn start`                                                                                                              | Start Metro console                                                 |
| Debug android             |                                                                                                            `yarn android`                                                                                                             | Start debuging android                                              |
| Debug iOS                 |                                                                                                              `yarn ios`                                                                                                               | Start debuging iOS                                                  |
| Release Android           |                                                                                                        `yarn android:release`                                                                                                         | Build release android version to connected device                   |
| Build Android Release APK |                                                                                                         `yarn build:android`                                                                                                          | Build release apk file                                              |
| Clean android build       |                                                                                                         `yarn clean:android`                                                                                                          | Clean android build folder and cache                                |
| Clean ios build           |                                                                                                           `yarn clean:ios`                                                                                                            | Clean ios build folder and cache                                    |
| Code Push Android         |                                                                                                           `yarn c:android`                                                                                                            | Push code to android staging Appcenter                              |
| Code Push iOS             |                                                                                                             `yarn c:ios`                                                                                                              | Push code to ios staging Appcenter                                  |
| Fastlane Android          |                                                                                                           `yarn f:android`                                                                                                            | Push code to firebase                                               |
| Fastlane iOS              |                                                                                                             `yarn f:ios`                                                                                                              | Push code to firebase                                               |
| Convention & Format       |                                                                                                              `yarn lint`                                                                                                              | Check code convention & auto format all files                       |
| Optimise                  |                                                                                                            `yarn optimise`                                                                                                            | Find redundant Components, Svg, Screens, Packges                    |
| Generate Script           | `yarn generate screen <ScreenName>` <br> `yarn generate component <CompName>`<br> `yarn generate store <StoreName>` <br>`yarn generate util <UtilName>` <br>`yarn generate model <ModelName>`<br>`yarn generate language <lang_name>` | Generate project components, screens, stores, language resource,... |

#### 2. Assets

- ##### Fonts
  Copy Fonts to <a href="../../tree/develop/template/src/Components/AppBar.tsx">src/Assets/Fonts</a>
  Linking Font:
  ```sh
  npx react-native-asset
  ```
  Define new fonts in <a href="../../tree/develop/template/src/Components/AppBar.tsx">src/Theme/Fonts.js</a>
  Note: File name format: `FontName-FontType.tff`
- ##### Images
  Divide images to each folder and define images in <a href="../../tree/develop/template/src/Components/AppBar.tsx">src/Assets/Images/index.js</a>
  Usage:
  ```js
  const { Images } = useAppTheme();
  ```
- ##### Svg
  Convert Svg to React Component: <a href="https://react-svgr.com/playground/?native=true">https://react-svgr.com/playground/?native=true</a>
  Example:
  ```jsX
  <ChervonRightSvg size={15} color="red" />
  ```

#### 3. Components

| Name             |                                                     Path                                                      | Description                                                                                   |
| ---------------- | :-----------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------- |
| AppBar           |           <a href="../../tree/develop/template/src/Components/AppBar.tsx">src/Components/AppBar</a>           | App Header                                                                                    |
| AppWebView       |       <a href="../../tree/develop/template/src/Components/AppWebView.tsx">src/Components/AppWebView</a>       | Base webview support inject cookie and                                                        |
| AnimatedNumber   |   <a href="../../tree/develop/template/src/Components/AnimatedNumber.tsx">src/Components/AnimatedNumber</a>   | For Jackpot animated number, user turn, etc,...                                               |
| AppGradientText  |  <a href="../../tree/develop/template/src/Components/AppGradientText.tsx">src/Components/AppGradientText</a>  | Gradient Text                                                                                 |
| AppTooltip       |       <a href="../../tree/develop/template/src/Components/AppTooltip.tsx">src/Components/AppTooltip</a>       | Support animation, direction, custom content...                                               |
| Accordion        |        <a href="../../tree/develop/template/src/Components/Accordion.tsx">src/Components/Accordion</a>        | A collapsible content support control content scrollview by ref                               |
| AppBottomSheet   |   <a href="../../tree/develop/template/src/Components/AppBottomSheet.tsx">src/Components/AppBottomSheet</a>   | Support pull to close, interact with FlatList, Keyboard, snap to fixed position...etc         |
| AppButton        |        <a href="../../tree/develop/template/src/Components/AppButton.tsx">src/Components/AppButton</a>        | Support linear gradient, svg icon, icon...etc                                                 |
| AppDiaLog        |        <a href="../../tree/develop/template/src/Components/AppDiaLog.tsx">src/Components/AppDiaLog</a>        | An dialog for showing information or confirmation, support backdrop to close, auto hide...etc |
| AppInput         |         <a href="../../tree/develop/template/src/Components/AppInput.tsx">src/Components/AppInput</a>         | Support custom fontSize, fontWeight, lineHeight, lineHeightRatio, color...etc                 |
| AppCalendar      |      <a href="../../tree/develop/template/src/Components/AppCalendar.tsx">src/Components/AppCalendar</a>      | Support custom fontSize, fontWeight, lineHeight, lineHeightRatio, color...etc                 |
| AppText          |          <a href="../../tree/develop/template/src/Components/AppText.tsx">src/Components/AppText</a>          | Support custom fontSize, fontWeight, lineHeight, lineHeightRatio, color...etc                 |
| AppCalendar      |      <a href="../../tree/develop/template/src/Components/AppCalendar.tsx">src/Components/AppCalendar</a>      | Support custom fontSize, fontWeight, lineHeight, lineHeightRatio, color...etc                 |
| BottomTabBar     |     <a href="../../tree/develop/template/src/Components/BottomTabBar.tsx">src/Components/BottomTabBar</a>     | Custom Tab Bar for React Navigation                                                           |
| Box              |              <a href="../../tree/develop/template/src/Components/Box.tsx">src/Components/Box</a>              | Custom View support multiple style as props                                                   |
| Carousel         |         <a href="../../tree/develop/template/src/Components/Carousel.tsx">src/Components/Carousel</a>         | Support snap to item, indicator (dot,bar) and control by ref.                                 |
| CollapseMenu     |     <a href="../../tree/develop/template/src/Components/CollapseMenu.tsx">src/Components/CollapseMenu</a>     | updating.                                                                                     |
| Container        |        <a href="../../tree/develop/template/src/Components/Container.tsx">src/Components/Container</a>        | Support controling safe area and status bar, `Wrap every screen by this Container`            |
| Draggable        |        <a href="../../tree/develop/template/src/Components/Draggable.tsx">src/Components/Draggable</a>        | Support minXY,maxXY, snap to horizontal or vertical, spring animation.                        |
| Dropdown         |         <a href="../../tree/develop/template/src/Components/Dropdown.tsx">src/Components/Dropdown</a>         | Support scrolling,                                                                            |
| DropdownListItem | <a href="../../tree/develop/template/src/Components/DropdownListItem.tsx">src/Components/DropdownListItem</a> | Example `renderItem` for DropDown.                                                            |
| Expanded         |         <a href="../../tree/develop/template/src/Components/Expanded.tsx">src/Components/Expanded</a>         | A view with `flex:1`.                                                                         |
| LoadingIndicator | <a href="../../tree/develop/template/src/Components/LoadingIndicator.tsx">src/Components/LoadingIndicator</a> | Support many type of loading indicator                                                        |
| Padding          |          <a href="../../tree/develop/template/src/Components/Padding.tsx">src/Components/Padding</a>          | Suport multiple edges of padding                                                              |
| Position         |         <a href="../../tree/develop/template/src/Components/Position.tsx">src/Components/Position</a>         | Absolute View with edges props                                                                |
| Pagination       |       <a href="../../tree/develop/template/src/Components/Pagination.tsx">src/Components/Pagination</a>       | Pagination indicator support custom style                                                     |
| Row              |              <a href="../../tree/develop/template/src/Components/Row.tsx">src/Components/Row</a>              | A view with `flex-direction:row`, support `align`,`justify`...                                |
| FlashList        |                         <a href="https://github.com/Shopify/flash-list">FlashList</a>                         | A performance List for large number of items                                                  |

#### 4. Config

- PageName.js: Page name for navigation
- index.js: API & app information config
  - Update API enviroment for (dev/git/production/staging)
  - Update APP_ENV to change API enviroment

#### 5. Navigators

- Application: Main navigator contain stacks and tabs
- BottomTab: Example bottom tab navigator
- NavigationUtils: Global navigation actions with Ref
  Example Nested Navigator:

  ```jsx
  const Application = () => {
    return (
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="HomeStack" component={HomeStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  const HomeStack = () => (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="HomeScreen1" component={HomeScreen1} />
      <Stack.Screen name="HomeScreen2" component={HomeScreen2} />
    </Stack.Navigator>
  );
  const BottomTab = () => (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
    </Tab.Navigator>
  );
  //navigate from Tab1 to HomeScreen1
  navigate("HomeStack", {
    screen: "HomeScreen1",
  });
  // navigate from HomeScreen2 to Tab2
  navigate("BottomTab", {
    screen: "Tab2",
  });
  ```

#### 6. Services

- Api Folder: contain request actions
- Axios.js: Axios instance with base config
- Endpoint: contain list of endpoints
- ServiceUtils: contain service utils, support generate header...

#### 7. Stores

- Persist by MMKV storage
- Mobx store
- Step to create new store
  1. Run `yarn generate store [StoreName]`
  2. Update `src/Stores/[StoreName].js`
  3. `[Optional]` Make store persist by adding its instance to `persistStores` (`Stores/index.js`)
- Store components:
  - Initial properties on top of Class
  - `constructor` (call persist actions here: `makePersistExcept` for many persist properties & `makePersists` if you just want persist some properties)
  - Computed value
  ```js
    get dataLength(){
      return this.data.length
    }
  ```
  - sync action
  ```js
  setData(newData){
    this.data = newDate
  }
  ```
  - async action
  ```js
  *fetchData(){
    const apiData = yeild callApi()
    this.data = apiData
  }
  ```
- Create local state instead of useState
  ```jsx
  const Component = () => {
    const state = useLocalObserver(() => ({
      number: 0,
      setNumber: (number) => (state.number = number),
      get isNumberGreaterThan100() {
        return this.number > 100;
      },
    }));
  };
  ```
- Consume Mobx state

  ```jsx
  <View>
    ...
    <AppButton
      text="Random"
      onPress={() => state.setNumber(Math.random() * 500)}
    />
    <Obx>{() => <AppText>{state.number}</AppText>}</Obx>
    <Obx>
      {() => (
        <AppText>{state.isNumberGreaterThan100 ? ">100" : "<=100"}</AppText>
      )}
    </Obx>
    <Obx>{() => <AppText>{exampleStore.dataLength}</AppText>}</Obx>
    ...
  </View>
  ```

- Await async action
  ```js
  const callAsyncAction = async () => {
    state.setLoading(true);
    await flowResult(exampleStore.fetchDat());
    state.setLoading(false);
  };
  ```
- Subscribe to state change

  ```js
  useEffect(() => {
    const dispose = autorun(() => {
      console.log(exampleStore.data);
    });
    return () => dispose();
  }, []);
  ```

- Understanding mobx state: <a href="https://mobx.js.org/understanding-reactivity.html">Doc</a>

#### 8. Translations

- Define resources in `Translations/Resources/en.js` & `Translations/Resources/vi.js`
- Add new language
  1. Run `yarn generate language [LanguageCode]`
  2. Update language resource in `Translations/Resources/[LanguageCode].js`
- Use `useTranslation` hook to get translate function
  ```jsx
  const { t } = useTranslation();
  <AppText>{t("key")}</AppText>;
  ```
- Change language
  ```jsx
  const { i18n } = useTranslation();
  i18n.changeLanguage("vi");
  ```

#### 9. Utils & Hooks

- Add new utils
  1. Run `yarn generate utils [UtilsName]`
  2. Update utils in `Utils/[UtilsName].js`
- Utils
  - Common.js: contain common utils
  - DateTime.js: contain date time utils (`moment library`)
  - Device.js: contain device utils(checkInternetConnection, isAndroid, isIOS, isTablet...)
  - Money.js: contain money utils (round, format...)
  - Number.js: contain number utils (random, round...)
  - String.js: contain string utils (capitalize, format, hideCharacter...)
  - Validator.js: contain validator utils (validate email, phone number, password...)
  - AppStorage: contain storage utils (get, set, remove, clear...)
  - Socket.js: contain socket utils (connect, disconnect, emit, on...) and sample socket events, actions
- Hooks:
  - `useLocalObserver`: create local state
  - `useNavigation`: get navigation object
  - `useRoute`: get route object
  - `useAppTheme`: get app theme
  - `useCountdown`: count down timer
  - `useFocusEffect`: useFocusEffect hook from `@react-navigation/native`

#### 10. Config CodePush & Fastlane

- CodePush:
  - Update codepush app ids in <a href="../../tree/develop/template/package.json">package.json</a>
  ```
  "codepush": {
    "ios_app_id": "<ios_app_id>",
    "android_app_id": "<android_app_id>",
  },
  ```
  - Update `CodePushDeploymentKey` in <a href="../../tree/develop/template/.env">.env</a>
  - Rebuild app and run `yarn c:ios` or `yarn c:android` to update codepush
- Fastlane:
  - Update config information in <a href="../../tree/develop/template/ios/fastlane/Fastfile">ios/fastlane/Fastfile</a> and <a href="../../tree/develop/android/fastlane/Fastfile">android/fastlane/Fastfile</a>
  - Run `yarn f:ios` or `yarn f:android` to build app to firebase app distribution

#### 11. Theme

- Update Colors & DarkColors in `src/Theme/Colors.js`
- Usage
  ```jsx
  const { Colors } = useAppTheme();
  return (
    <Container style={{ backgroundColor: Colors.background }}>
      <AppButton
        text="Switch Theme"
        onPress={() =>
          appStore.setLanguage(
            appStore.language === LanguageCode.En
              ? LanguageCode.Vi
              : LanguageCode.En
          )
        }
      />
    </Container>
  );
  ```
