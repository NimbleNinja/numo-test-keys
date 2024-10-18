import React from 'react'
import { RootStackParamList } from '../types/navigation'
import TodayScreen from '../screens/TodayScreen'
import HistoryScreen from '../screens/HistoryScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TodayIcon from '../assets/today.svg'
import HistoryIcon from '../assets/history.svg'
import { StyleSheet, Text } from 'react-native'
import ClearHistoryButton from '../components/ClearHistoryButton'
import AddJokeButton from '../components/AddJokeButton'

const RootStack = createBottomTabNavigator<RootStackParamList>()

const RootNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleContainerStyle: styles.headerTitleContainerStyle,
        headerRightContainerStyle: styles.headerRightContainerStyle,
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle
      }}
    >
      <RootStack.Screen
        name="today"
        component={TodayScreen}
        options={{
          headerRight: () => <AddJokeButton />,
          tabBarIcon: ({ focused }) => <TodayIcon stroke={focused ? '#9763FF' : '#C1C3C6'} />,
          tabBarItemStyle: [styles.tabBarItemStyle, { marginRight: 16 }],
          tabBarLabel: ({ children, focused }) => (
            <Text style={[styles.tabBarLabelStyle, { color: focused ? '#9763FF' : '#C1C3C6' }]}>{children}</Text>
          )
        }}
      />
      <RootStack.Screen
        name="history"
        component={HistoryScreen}
        options={{
          headerRight: () => <ClearHistoryButton />,
          tabBarIcon: ({ focused }) => <HistoryIcon stroke={focused ? '#9763FF' : '#C1C3C6'} />,
          tabBarItemStyle: [styles.tabBarItemStyle, { marginLeft: 16 }],
          tabBarLabel: ({ children, focused }) => (
            <Text style={[styles.tabBarLabelStyle, { color: focused ? '#9763FF' : '#C1C3C6' }]}>{children}</Text>
          )
        }}
      />
    </RootStack.Navigator>
  )
}

export default RootNavigation

const styles = StyleSheet.create({
  headerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
    height: 136
  },
  headerTitleStyle: {
    fontFamily: 'Inter-Bold',
    fontSize: 36,
    textTransform: 'capitalize'
  },
  headerTitleContainerStyle: {
    marginBottom: 24,
    justifyContent: 'flex-end'
  },
  headerRightContainerStyle: {
    paddingBottom: 24,
    paddingRight: 24,
    justifyContent: 'flex-end'
  },
  tabBarStyle: {
    height: 68,
    paddingBottom: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E6E6E6'
  },
  tabBarItemStyle: {
    flex: 0
  },
  tabBarLabelStyle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    textTransform: 'capitalize'
  }
})
