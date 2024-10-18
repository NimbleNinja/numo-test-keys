import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import FavFiledIcon from '../assets/fav-filled.svg'

type Props = {
  liked: boolean
  onPress?: () => void
}

const LikeButton: React.FC<Props> = ({ liked, onPress }) => {
  return (
    <Pressable onPress={onPress} style={[styles.iconBackground, { backgroundColor: liked ? '#9763FF' : '#9763FF33' }]}>
      <FavFiledIcon fill={liked ? '#fff' : '#9763FF'} fillOpacity={liked ? 1 : 0} />
    </Pressable>
  )
}

export default LikeButton

const styles = StyleSheet.create({
  iconBackground: {
    width: 68,
    height: 68,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 34
  }
})
