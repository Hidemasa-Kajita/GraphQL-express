import { ICommentDocument } from '../models/comment.model'
import { IPostDocument } from '../models/post.model'

export type CreateCommentDTO = {
  post_id: Pick<IPostDocument, 'id'>
  comment: Omit<ICommentDocument, 'id'>
}
