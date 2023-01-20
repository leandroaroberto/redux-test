import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter/counterSlice'
import questionReducer from './Question/questionSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    question: questionReducer
  }
})