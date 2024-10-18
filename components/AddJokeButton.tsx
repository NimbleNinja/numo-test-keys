import React from 'react'
import StyledButton from './StyledButton'
import { useAppDispatch } from '../store/hooks'
import { getJokeThunk } from '../store/history'

const AddJokeButton = () => {
  const dispatch = useAppDispatch()

  const addNewJokeHandler = () => {
    dispatch(getJokeThunk())
  }
  return <StyledButton type="new" onPress={addNewJokeHandler} />
}

export default AddJokeButton
