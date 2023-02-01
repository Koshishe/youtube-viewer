import _ from 'lodash';
import { SearchBar } from './components/search_bar';
import { VideoList } from './components/video_list';
import { VideoDetail } from './components/video_detail';
import { useCallback, useEffect, useState } from 'react';
import { Video } from './types/types';
import { getComments, getVideos } from './api/api';
import { useDispatch, useSelector } from 'react-redux';
import { addVideos, addComments } from './state/reducers';
import { commentsSelector, videosSelector } from './state/selectors';

const DEFAULT_QUERY = 'liverpool'

export const App = () => {
  const dispatch = useDispatch()
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>(DEFAULT_QUERY)

  const videos = useSelector(videosSelector)
  const comments = useSelector(commentsSelector)

  const videoSearch = useCallback((query: string) => {
    getVideos(query).then(videos => {
      dispatch(addVideos(videos))
      setSelectedVideo(videos[0])
    })
  }, [videos])

  const getCommentByVideoId = useCallback((videoId: string) => {
    getComments(videoId).then(comments => {
      dispatch(addComments(comments))
    })
  }, [comments])

  const onCommentsSearch = _.debounce((videoId: string) => {
    getCommentByVideoId(videoId)
  }, 300)

  const onVideoSearch = _.debounce((query: string) => {
    videoSearch(query);
  }, 500);

  useEffect(() => {
    onVideoSearch(searchQuery)
  }, [searchQuery])

  useEffect(() => {
    if (selectedVideo) {
      onCommentsSearch(selectedVideo.id.videoId)
    }
  }, [selectedVideo])

  return (
    <div>
      <SearchBar onSearchTermChange={setSearchQuery} searchQuery={searchQuery} />
      {selectedVideo ? (
        <VideoDetail video={selectedVideo} comments={comments}/>
        ):(
        <div aria-label='video loading'>Loading...</div>
      )}
      <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
    </div>
  );
}
