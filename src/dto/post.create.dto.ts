import { IPostDocument } from '../models/post.model'

export type CreatePostDTO = {
  post: Omit<IPostDocument, 'id'>
}
