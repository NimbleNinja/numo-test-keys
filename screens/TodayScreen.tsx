import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { isJokeToday } from '../tools/jokes'
import { getJokeThunk, selectHistory, updateHistoryRecord } from '../store/history'
import LikeButton from '../components/LikeButton'

const TodayScreen = () => {
  const dispatch = useAppDispatch()
  const jokes = useAppSelector(selectHistory.selectAll)
  const [load, setLoad] = useState(true)

  const likeJokeHandler = () => {
    if (!jokes.length) return

    const { id, like } = jokes[0]
    dispatch(updateHistoryRecord({ id, changes: { like: !like } }))
  }

  useEffect(() => {
    if (jokes.length) {
      const todayJoke = jokes[0]
      if (isJokeToday(todayJoke.date)) {
        setLoad(false)
        return
      }
      dispatch(getJokeThunk()).then(() => setLoad(false))
    } else {
      dispatch(getJokeThunk()).then(() => setLoad(false))
    }
  }, [])

  if (load)
    return (
      <View style={styles.container}>
        <ActivityIndicator size={60} />
      </View>
    )

  return (
    <View style={styles.container}>
      {jokes.length ? (
        <View style={styles.joke}>
          <Text style={styles.jokeText}>{jokes[0].text}</Text>
          <LikeButton liked={jokes[0].like} onPress={likeJokeHandler} />
        </View>
      ) : (
        <Text style={styles.emptyListTitle}>Empty history...</Text>
      )}
    </View>
  )
}

export default TodayScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  joke: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24
  },
  jokeText: {
    marginBottom: 16,
    fontFamily: 'Inter-SemiBold',
    fontSize: 24
  },
  emptyListTitle: {
    marginTop: 24,
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    textAlign: 'center'
  }
})
