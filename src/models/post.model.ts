import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
})

export type PostFeilds = {
  id: string
  title: string
  description: string
}

export const Post = mongoose.model('post', PostSchema)
