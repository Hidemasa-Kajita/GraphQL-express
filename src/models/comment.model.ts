import mongoose, { Model, Schema } from 'mongoose'
import { IPostDocument } from './post.model'

/*
 * Comment model
 *
 * @package models
 * @see https://mongoosejs.com/docs/guide.html schema
 * @see https://github.com/Automattic/mongoose/blob/master/docs/typescript/statics.md static in typescript
 * @see https://github.com/Automattic/mongoose/blob/master/docs/typescript/virtuals.md virtuals in typescript
 */

export interface ICommentDocument extends mongoose.Document<{ _id: string }> {
  content: string
  post: IPostDocument
}

interface ICommentVirtuals {
  all: string
}

interface ICommentMethods {
  dynamicMethod(): void
}

interface ICommentModel extends Model<ICommentDocument, ICommentMethods, ICommentVirtuals> {
  staticMethod(): number
}

const CommentSchema = new mongoose.Schema<ICommentDocument, ICommentModel, ICommentVirtuals>({
  content: {
    type: String,
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
})

/*
 * statics
 * @see https://mongoosejs.com/docs/guide.html#statics statics
 */
CommentSchema.static('staticMethod', function (this: ICommentModel) {
  return this.find()
})

/*
 * methods
 * @see https://mongoosejs.com/docs/guide.html#methods methods
 *
 * TODO: not working...
 */
CommentSchema.methods.dynamicMethod = function () {
  return 'hoge'
}

/*
 * virtuals
 * @see https://mongoosejs.com/docs/api.html#schema_Schema-virtuals virtuals
 * @see https://stackoverflow.com/questions/54445462/mongoose-virtuals-with-typescript-error-the-containing-arrow-function-captures stackoverflow
 */

export const Comment = mongoose.model<ICommentDocument, ICommentModel>('Comment', CommentSchema)
