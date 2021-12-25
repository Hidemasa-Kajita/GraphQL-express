import { IPostDocument } from '../models/post.model'

export interface GetPostDTO {
  id: Pick<IPostDocument, 'id'>
}
