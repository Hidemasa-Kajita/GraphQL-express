import { ICommentDocument } from '../models/comment.model'

export type UpdateCommentDTO = {
  post_id: Pick<ICommentDocument, 'id'>
  comment: Omit<ICommentDocument, 'id'>
}
