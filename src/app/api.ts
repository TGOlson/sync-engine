import request from 'graphql-request';
// import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { graphql } from './gql';
import { BootstrapQueryQuery as BootstrapQueryType } from './gql/graphql';

export type { BootstrapQueryType };

const endpoint = 'http://localhost:8080/api/graphql';

const bootstrapQuery = graphql(/* GraphQL */ `
  query BootstrapQuery {
    users {
      id
      name
      email
      createdAt
      updatedAt
      posts {
        id
        authorId
        author {
          id
        }
        published
        likes
        createdAt
        updatedAt
        postHistory {
          id
          postId
          post {
            id
          }
          title
          content
          createdAt
          updatedAt
        }
      }
      comments {
        id
        authorId
        author {
          id
        }
        likes
        postId
        post {
          id
        }
        text
        createdAt
        updatedAt
      }
    }
  }
`);

export const fetchBootstrapData = (): Promise<BootstrapQueryType> => request(endpoint, bootstrapQuery);

// export const fetchBootstrapData = (): UseQueryResult<BootstrapQueryType, Error> => {
//   return useQuery({
//     queryKey: ['bootstrap'], 
//     queryFn: () => request(endpoint, bootstrapQuery)
//   });
// };
