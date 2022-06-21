import { configureStore, createSlice } from '@reduxjs/toolkit'


let test = createSlice({
  name: 'test',
  initialState: []
});

export default configureStore({
  reducer: { 
    test : test.reducer
  }
}) 