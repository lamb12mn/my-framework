import { createLocalforage, createStorage } from './index'
// 先导入 StorageType
const storagePrefix = import.meta.env.VITE_STORAGE_PREFIX || ''

export const localStg = createStorage<StorageType.Local>('local', storagePrefix)

export const sessionStg = createStorage<StorageType.Session>('session', storagePrefix)

export const localforage = createLocalforage<StorageType.Local>('local')
