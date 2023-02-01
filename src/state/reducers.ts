import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment, Video } from '../types/types';
import { initialState } from './spec';

export const videoSlice = createSlice({
  name: 'ytData',
  initialState: initialState,
  reducers: {
    addVideos: (state, action: PayloadAction<Video[]>) => ({
      ...state,
      videos: action.payload
    }),
    addComments: (state, action: PayloadAction<Comment[]>) => ({
      ...state,
      comments: action.payload
    }),
  },
})

export const { addVideos, addComments } = videoSlice.actions
export default videoSlice.reducer
