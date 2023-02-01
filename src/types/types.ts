export type Video = {
  id: {
    videoId: string
  }
  etag: string
  snippet: {
    title: string
    description: string
    thumbnails: {
      default: {
        url: string
      }
    }
  }
}

export type Comment = {
  id: string,
  snippet: {
    topLevelComment: {
      snippet: CommentDetail
    }
  }
}

export type CommentDetail =  {
  authorDisplayName: string
  authorProfileImageUrl: string
  publishedAt: string
  textOriginal: string
  textDisplay: string
}
