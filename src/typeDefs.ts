import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Post {
    id: ID
    title: String
    content: String
    comments: [Comment]
  }

  type Comment {
    id: ID
    content: String
    post: Post
  }

  type Query {
    hello: String

    getAllPosts: [Post]

    getPost(id: ID): Post
  }

  input PostInput {
    title: String
    content: String
  }

  input CommentInput {
    content: String
  }

  type Mutation {
    createPost(post: PostInput): Post

    deletePost(id: ID): String

    createComment(id: ID, comment: CommentInput): Comment

    updatePost(id: ID, post: PostInput): Post
  }
`
