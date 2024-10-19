import { Text, TextProps, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

const StyledText: React.FC<TextProps> = props => {
  const { colors } = useTheme()

  return (
    <Text {...props} style={[props.style, { color: colors.text }]}>
      {props.children}
    </Text>
  )
}

export default StyledText
