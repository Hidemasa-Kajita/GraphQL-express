import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comment = {
  __typename?: 'Comment';
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  post?: Maybe<Post>;
};

export type CommentInput = {
  content?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment?: Maybe<Comment>;
  createPost?: Maybe<Post>;
  deletePost?: Maybe<Scalars['String']>;
  updatePost?: Maybe<Post>;
};


export type MutationCreateCommentArgs = {
  comment?: InputMaybe<CommentInput>;
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationCreatePostArgs = {
  post?: InputMaybe<PostInput>;
};


export type MutationDeletePostArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdatePostArgs = {
  id?: InputMaybe<Scalars['ID']>;
  post?: InputMaybe<PostInput>;
};

export type Post = {
  __typename?: 'Post';
  comments?: Maybe<Array<Maybe<Comment>>>;
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type PostInput = {
  content?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getAllPosts?: Maybe<Array<Maybe<Post>>>;
  getPost?: Maybe<Post>;
  hello?: Maybe<Scalars['String']>;
};


export type QueryGetPostArgs = {
  id?: InputMaybe<Scalars['ID']>;
};
