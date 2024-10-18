import React from 'react'
import StyledButton from './StyledButton'
import { useAppDispatch } from '../store/hooks'
import { resetHistory } from '../store/history'

const ClearHistoryButton = () => {
  const dispatch = useAppDispatch()

  const clearHistoryHandler = () => {
    dispatch(resetHistory())
  }
  return <StyledButton type="clear" onPress={clearHistoryHandler} />
}

export default ClearHistoryButton
