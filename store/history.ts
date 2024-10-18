import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import { Joke } from '../types/common'
import { createAppAsyncThunk } from './hooks'
import { fetchTodayJoke } from '../api/jokes'

const historyAdapter = createEntityAdapter({
  selectId: (joke: Joke) => joke.id,
  sortComparer: (a, b) => b.date - a.date
})

const historySlice = createSlice({
  name: 'history',
  initialState: historyAdapter.getInitialState(),
  reducers: {
    addHistoryRecord: historyAdapter.addOne,
    setHistoryRecords: historyAdapter.setAll,
    updateHistoryRecord: historyAdapter.updateOne,
    resetHistory: historyAdapter.removeAll
  }
})

export const { addHistoryRecord, setHistoryRecords, resetHistory, updateHistoryRecord } = historySlice.actions
export default historySlice.reducer

export const selectHistory = historyAdapter.getSelectors<RootState>(state => state.history)

export const getJokeThunk = createAppAsyncThunk('GET_JOKE', async (_, { dispatch }) => {
  try {
    const { id, joke } = await fetchTodayJoke()
    const todayJoke: Joke = {
      id,
      text: joke,
      like: false,
      date: Date.now()
    }
    dispatch(addHistoryRecord(todayJoke))
  } catch (error) {
    // handle error
  }
})
