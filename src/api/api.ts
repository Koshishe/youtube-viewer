import axios from 'axios/index';

const GET_COMMENTS = 'commentThreads'
const SEARCH_VIDEOS = 'search'

const api =  axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    part: 'snippet',
    key: process.env.REACT_APP_API_KEY
  }
})

export const getVideos = async (query: string) => {
  try {
    const res = await api.get(SEARCH_VIDEOS, {
      params: {
        q: query,
        type: 'video'
      }
    })
    return res.data.items
  } catch (error) {
    console.error(error)
    return []
  }
}

export const getComments = async (videoId: string) => {
  try {
    const res = await api.get(GET_COMMENTS, {
      params: {
        videoId: videoId
      }
    })
    return res.data.items
  } catch (error) {
    console.error(error)
    return []
  }
}
