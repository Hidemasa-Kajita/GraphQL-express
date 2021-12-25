/**
 * Comment dto
 */

import { Post } from './post.dto'

export type Comment = {
  id: string
  content: string
}

export interface GetCommentDTO {
  id: Pick<Comment, 'id'>
}

export type CreateCommentDTO = {
  post_id: Pick<Post, 'id'>
  comment: Omit<Comment, 'id'>
}

export type UpdateCommentDTO = {
  post_id: Pick<Comment, 'id'>
  comment: Omit<Comment, 'id'>
}

export type DeleteCommentDTO = {
  id: Pick<Comment, 'id'>
}
