import { configureStore } from '@reduxjs/toolkit'
import historyReducer from './history'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

const historyPersistConfig = {
  key: 'history',
  storage: AsyncStorage
}
const historyPersistedReducer = persistReducer(historyPersistConfig, historyReducer)

export const store = configureStore({
  reducer: {
    history: historyPersistedReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
