import { NavigationContainer } from '@react-navigation/native'
import RootNavigation from './navigation/RootNavigation'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </Provider>
    </PersistGate>
  )
}
