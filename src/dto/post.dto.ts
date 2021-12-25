/**
 * post dto
 */

export type Post = {
  id: string
  title: string
  content: string
}

export interface GetPostDTO {
  id: Pick<Post, 'id'>
}

export type CreatePostDTO = {
  post: Omit<Post, 'id'>
}

export type UpdatePostDTO = {
  id: Pick<Post, 'id'>
  post: Omit<Post, 'id'>
}

export type DeletePostDTO = {
  id: Pick<Post, 'id'>
}
