import { ICommentDocument } from '../models/comment.model'

export interface GetCommentDTO {
  id: Pick<ICommentDocument, 'id'>
}
