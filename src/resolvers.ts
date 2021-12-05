import { CreatePostDTO, DeletePostDTO, GetPostDTO, UpdatePostDTO } from './dto/post.dto'
import { Post } from './models/post.model'

export const resolvers = {
  Query: {
    hello: () => {
      Post.staticMethod()
      return 'Hello world!'
    },
    getAllPosts: async () => {
      return await Post.find()
    },
    getPost: async (_parent: any, { id }: GetPostDTO, _context: any, _info: any) => {
      return await Post.findById(id)
    },
  },
  Mutation: {
    createPost: async (_parent: any, args: CreatePostDTO, _context: any, _info: any) => {
      const post = new Post(args.post)
      await post.save()
      return post
    },
    deletePost: async (_parent: any, { id }: DeletePostDTO, _context: any, _info: any): Promise<string> => {
      await Post.findByIdAndDelete(id)
      return 'deleted.'
    },
    updatePost: async (_parent: any, args: UpdatePostDTO, _context: any, _info: any) => {
      const { id, post } = args
      return await Post.findByIdAndUpdate(id, post, { new: true })
    },
  },
}
