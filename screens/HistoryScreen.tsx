import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { selectHistory, updateHistoryRecord } from '../store/history'
import LikeButton from '../components/LikeButton'

const HistoryScreen = () => {
  const dispatch = useAppDispatch()
  const jokes = useAppSelector(selectHistory.selectAll)

  const likeJokeHandler = (id: string, like: boolean) => {
    dispatch(updateHistoryRecord({ id, changes: { like: !like } }))
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={jokes}
        renderItem={({ item }) => {
          return (
            <View style={styles.jokeItem}>
              <Text style={styles.jokeText}>{item.text}</Text>
              <LikeButton onPress={() => likeJokeHandler(item.id, item.like)} liked={item.like} />
            </View>
          )
        }}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={<Text style={styles.emptyListTitle}>Empty history...</Text>}
      />
    </View>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  jokeItem: {
    padding: 24,
    flexDirection: 'row',
    columnGap: 20
  },
  jokeText: {
    flex: 1,
    fontFamily: 'Inter-Medium',
    fontSize: 16
  },
  separator: {
    height: 1,
    backgroundColor: '#E6E6E6'
  },
  emptyListTitle: {
    marginTop: 24,
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    textAlign: 'center'
  }
})
