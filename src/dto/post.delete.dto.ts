import { IPostDocument } from '../models/post.model'

export type DeletePostDTO = {
  id: Pick<IPostDocument, 'id'>
}
