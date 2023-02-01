import { VideoComments } from './video_comments';
import { Comment, Video } from '../types/types';

type Props = {
    video: Video
    comments: Comment[]
}

export const VideoDetail = ({ video, comments }: Props) => {
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title={video.snippet.title}
          className="embed-responsive-item"
          src={url}
        />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
        <div className="comments">
          <h4>Comments</h4>
            {comments.length > 0 ? (
              <VideoComments comments={comments} />
            ):(
              <div>No comments</div>
            )}
        </div>
    </div>
  );
};
