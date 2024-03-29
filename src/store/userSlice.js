import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: { 
    userDataAdd(state, action) {
    state.user = action.payload;
  }
}
})

export const { userDataAdd } = userSlice.actions
export default userSlice.reducer;

