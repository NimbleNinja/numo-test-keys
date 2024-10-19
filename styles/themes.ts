import { Theme, DefaultTheme } from '@react-navigation/native'

export const lightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff'
  }
}
