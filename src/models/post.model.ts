import mongoose, { Model } from 'mongoose'

/*
 * post model
 *
 * @package models
 * @see https://mongoosejs.com/docs/guide.html schema
 * @see https://github.com/Automattic/mongoose/blob/master/docs/typescript/statics.md static in typescript
 * @see https://github.com/Automattic/mongoose/blob/master/docs/typescript/virtuals.md virtuals in typescript
 */

interface IPostDocument extends mongoose.Document {
  title: string
  description: string
}

interface IPostVirtuals {
  all: string
}

interface IPostMethods {
  dynamicMethod(): void
}

interface IPostModel extends Model<IPostDocument, IPostMethods, IPostVirtuals> {
  staticMethod(): number
}

const PostSchema = new mongoose.Schema<IPostDocument, IPostModel, IPostVirtuals>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
})

/*
 * statics
 * @see https://mongoosejs.com/docs/guide.html#statics statics
 */
PostSchema.static('staticMethod', function (this: IPostModel) {
  return this.find()
})

/*
 * methods
 * @see https://mongoosejs.com/docs/guide.html#methods methods
 *
 * TODO: not working...
 */
PostSchema.methods.dynamicMethod = function () {
  return 'hoge'
}

/*
 * virtuals
 * @see https://mongoosejs.com/docs/api.html#schema_Schema-virtuals virtuals
 * @see https://stackoverflow.com/questions/54445462/mongoose-virtuals-with-typescript-error-the-containing-arrow-function-captures stackoverflow
 */
PostSchema.virtual('all').get(function (this: IPostDocument) {
  return `${this.title} ${this.description}`
})

export const Post = mongoose.model<IPostDocument, IPostModel>('post', PostSchema)
