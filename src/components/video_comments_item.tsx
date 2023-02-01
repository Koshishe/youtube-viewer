import { CommentDetail } from '../types/types';

type Props = {
  comment: CommentDetail
}

export const VideoCommentsItem = ({ comment }: Props) => {
  const {authorProfileImageUrl, authorDisplayName, publishedAt, textOriginal} = comment;
  const publishDate = new Date(publishedAt).toDateString()

  return (
    <li className="list-comment-item">
        <div className="comment-head">
          <div className="comment-author-info">
          <img className="comment-author-image" alt="video thumbnail" src={authorProfileImageUrl} />
          <div className="comment-author-name">{authorDisplayName}</div>
          </div>
          <div className="comment-date">{publishDate}</div>
        </div>
          <div className="comment-text">{textOriginal}</div>
    </li>
  );
};
