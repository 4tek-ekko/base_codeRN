import { makeAutoObservable } from 'mobx'
import { hydrateStore, isHydrated } from 'mobx-persist-store'
import { makePersistExcept } from '@/Utils'
import { LanguageCode, ThemeType } from '@/Models'
import i18n from '@/Translations/i18n'
export default class AppStore {
  unlockedFakeGame = false
  theme = ThemeType.Light
  language = LanguageCode.Vi
  constructor() {
    makeAutoObservable(this)
    makePersistExcept(this, 'AppStore', [])
  }
  setUnlockFakeGame(status) {
    this.unlockedFakeGame = status
  }
  switchTheme() {
    this.theme =
      this.theme === ThemeType.Dark ? ThemeType.Light : ThemeType.Dark
  }
  setLanguage(code) {
    i18n.changeLanguage(code)
    this.language = code
  }
  get isDarkTheme() {
    return this.theme === ThemeType.Dark
  }
  // check for hydration (required)
  get isHydrated() {
    return isHydrated(this)
  }
  // hydrate the store (required)
  async hydrateStore() {
    await hydrateStore(this)
  }
}
