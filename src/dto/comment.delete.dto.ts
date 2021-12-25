import { ICommentDocument } from '../models/comment.model'

export type DeleteCommentDTO = {
  id: Pick<ICommentDocument, 'id'>
}
