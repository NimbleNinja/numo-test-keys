import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import ClearIcon from '../assets/clear.svg'
import AddJokeIcon from '../assets/heart-add.svg'

type Props = {
  type: 'clear' | 'new'
  onPress: () => void
}

const ICONS = {
  clear: ClearIcon,
  new: AddJokeIcon
}

const StyledButton: React.FC<Props> = ({ onPress, type }) => {
  const Icon = ICONS[type]
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Icon fill="#9763FF" />
    </Pressable>
  )
}

export default StyledButton

const styles = StyleSheet.create({
  button: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    backgroundColor: '#9763FF33'
  }
})
