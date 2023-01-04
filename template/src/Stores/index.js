import UserStore from './UserStore'
import DiaLogStore from './DiaLogStore'
import AppStore from './AppStore'
export const userStore = new UserStore()
export const diaLogStore = new DiaLogStore()
export const appStore = new AppStore()
//[generate_here] <--Do not remove this comment. Used for auto-generation

//Add Persist Store here
const persistStores = [userStore, appStore]

export const rehydrateStore = async () =>
  await Promise.all(
    persistStores.map(async store => await store?.hydrateStore?.()),
  )
