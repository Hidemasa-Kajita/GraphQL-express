import { Post, PostFeilds } from './models/post.model'

export const resolvers = {
  Query: {
    hello: () => {
      return 'Hello world!'
    },
    getAllPosts: async (): Promise<PostFeilds[]> => {
      return await Post.find()
    },
    getPost: async (
      _parent: any,
      { id }: { id: Pick<PostFeilds, 'id'> },
      _context: any,
      _info: any
    ): Promise<PostFeilds> => {
      return await Post.findById(id)
    },
  },
  Mutation: {
    createPost: async (
      _parent: any,
      args: { post: Omit<PostFeilds, 'id'> },
      _context: any,
      _info: any
    ): Promise<PostFeilds> => {
      const post = new Post(args.post)
      await post.save()
      return post
    },
    deletePost: async (
      _parent: any,
      { id }: { id: Pick<PostFeilds, 'id'> },
      _context: any,
      _info: any
    ): Promise<string> => {
      await Post.findByIdAndDelete(id)
      return 'deleted.'
    },
    updatePost: async (
      _parent: any,
      args: { id: Pick<PostFeilds, 'id'>; post: Omit<PostFeilds, 'id'> },
      _context: any,
      _info: any
    ): Promise<PostFeilds> => {
      const { id, post } = args
      return await Post.findByIdAndUpdate(id, post, { new: true })
    },
  },
}
