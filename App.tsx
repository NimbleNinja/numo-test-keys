import { DarkTheme, NavigationContainer } from '@react-navigation/native'
import RootNavigation from './navigation/RootNavigation'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { lightTheme } from './styles/themes'
import { useColorScheme } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  const theme = useColorScheme()

  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <NavigationContainer theme={theme === 'light' ? lightTheme : DarkTheme}>
          <RootNavigation />
          <StatusBar style="auto" />
        </NavigationContainer>
      </Provider>
    </PersistGate>
  )
}
