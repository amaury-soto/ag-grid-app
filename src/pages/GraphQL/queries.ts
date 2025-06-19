import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
        user {
          name
        }
      }
      meta {
        totalCount
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
      user {
        name
      }
    }
  }
`;