import { Dimensions } from 'react-native'
import { createSlice } from '@reduxjs/toolkit'
import { updateStyleApp } from '../../functions/functions'

const initialState = {
  screen: Dimensions.get('window').width,
  styleApp: updateStyleApp(Dimensions.get('window').width)
}

const screenWidthSlice = createSlice({
  name: 'screenWidthReducer',
  initialState,
  reducers: {
    screenWidthСhange(state, action) {
      state.screen = action.payload,
      state.styleApp = updateStyleApp(action.payload)
    }
  }
})
export const { screenWidthСhange } = screenWidthSlice.actions
export default screenWidthSlice.reducer