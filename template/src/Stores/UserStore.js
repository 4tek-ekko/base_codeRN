import { makePersistExcept } from '@/Utils'
import { makeAutoObservable } from 'mobx'
import { hydrateStore, isHydrated } from 'mobx-persist-store'

export default class UserStore {
  isLoggedIn = false
  userInfo = {}
  constructor() {
    makeAutoObservable(this)
    makePersistExcept(this, 'UserStore', [])
  }
  setUserInfo(userInfo, isLoggedIn = true) {
    this.userInfo = userInfo
    this.isLoggedIn = isLoggedIn
  }
  logout() {
    this.isLoggedIn = false
    this.userInfo = {}
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
