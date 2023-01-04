import { fetchExample } from '@/Services/Api'
import { makePersistExcept } from '@/Utils'
import { makeAutoObservable } from 'mobx'
import { hydrateStore, isHydrated } from 'mobx-persist-store'
export default class HomeStore {
  data = []
  constructor() {
    makeAutoObservable(this)
    // makePersist(this, 'HomeStore', ['name'])
    makePersistExcept(this, 'HomeStore', ['name'])
  }
  //async action
  *fetch() {
    const data = yield fetchExample()
    if (Array.isArray(data)) {
      this.data = data
    }
  }
  //sync action
  reset() {
    this.data = []
  }
  //computed value
  get dataLength() {
    return this.data.length
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
