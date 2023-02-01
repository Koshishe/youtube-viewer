import { Comment, Video } from '../types/types';

export interface IState {
    videos: Video[]
    comments: Comment[]
}

export const initialState: IState = {
    videos: [],
    comments: []
}
