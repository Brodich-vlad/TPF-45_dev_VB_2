import { configureStore } from '@reduxjs/toolkit'
import calcSlice from './slices/calcSlice';
import screenWidthSlice from './slices/screenWidthSlice';

const store = configureStore({
  reducer: {
		screenWidth: screenWidthSlice,
		calculate: calcSlice,
  }
})

export default store