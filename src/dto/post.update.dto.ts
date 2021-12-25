import { IPostDocument } from '../models/post.model'

export type UpdatePostDTO = {
  id: Pick<IPostDocument, 'id'>
  post: Omit<IPostDocument, 'id'>
}
