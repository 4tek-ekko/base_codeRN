import { appStore } from '@/Stores'
import { getAppTheme } from '@/Theme'
import { autorun } from 'mobx'
import { useEffect, useState } from 'react'
import { ImageSourcePropType } from 'react-native'

export default function () {
  const [isDark, setIsDark] = useState(appStore.isDarkTheme)
  useEffect(() => {
    const dispose = autorun(() => {
      setIsDark(appStore.isDarkTheme)
    })
    return () => dispose()
  }, [])
  return mergeAppTheme(isDark, getAppTheme())
}

const mergeAppTheme = (
  isDark: boolean,
  theme: ReturnType<typeof getAppTheme>,
) => {
  type ImageKey =
    | keyof typeof theme.default.Images
    | keyof typeof theme.dark.Images
  type ColorKey =
    | keyof typeof theme.default.Colors
    | keyof typeof theme.dark.Colors

  const primaryTheme = isDark ? theme.dark : theme.default
  const secondaryTheme = isDark ? theme.default : theme.dark
  const mergedColors: { [key in ColorKey]: ImageSourcePropType } = {
    ...secondaryTheme.Colors,
    ...primaryTheme.Colors,
  } as any
  const mergedImages: { [key in ImageKey]: ImageSourcePropType } = {
    ...secondaryTheme.Images,
    ...primaryTheme.Images,
  } as any
  return {
    ...primaryTheme,
    Colors: mergedColors,
    Images: mergedImages,
  }
}
