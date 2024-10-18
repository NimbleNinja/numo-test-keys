import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

export type RootStackParamList = {
  today: undefined
  history: undefined
}

export type RootStackScreenProps<T extends keyof RootStackParamList> = BottomTabScreenProps<RootStackParamList, T>
