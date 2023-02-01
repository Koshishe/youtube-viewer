import { VideoCommentsItem } from './video_comments_item';
import { Comment } from '../types/types';
import { useMemo } from 'react';

type Props = {
  comments: Comment[]
}

export const VideoComments = ({ comments }: Props) => {
  const videoComments = useMemo(() => (
    comments.map((comment) => (
      <VideoCommentsItem key={comment.id} comment={comment.snippet.topLevelComment.snippet}/>
    ))
  ), [comments]);

  return <ul className="list-comments">{videoComments}</ul>;
};
