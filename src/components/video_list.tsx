import { VideoListItem } from './video_list_item';
import { Video } from '../types/types';
import { useMemo } from 'react';

type Props = {
  onVideoSelect: (video: Video) => void
  videos: Video[]
}

export const VideoList = ({ onVideoSelect, videos }: Props) => {
  const videoItems = useMemo(() => (
    videos.map((video) => (
      <VideoListItem
        onVideoSelect={onVideoSelect}
        key={video.etag}
        video={video}
      />
    ))
  ), [videos])

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};
