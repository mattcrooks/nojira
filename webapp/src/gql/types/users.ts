import * as Types from '../../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {
  uri: 'http://localhost:8080/graphql'
} as const;
export type AllUsersQueryQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllUsersQueryQuery = { __typename?: 'Query', queryUser?: Array<{ __typename?: 'User', name: string, github: string, email?: string | null, telegram?: string | null, rate?: number | null, actionHistory?: Array<string | null> | null } | null> | null };


export const AllUsersQueryDocument = gql`
    query AllUsersQuery {
  queryUser {
    name
    github
    email
    telegram
    rate
    actionHistory
  }
}
    `;

/**
 * __useAllUsersQueryQuery__
 *
 * To run a query within a React component, call `useAllUsersQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQueryQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQueryQuery, AllUsersQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsersQueryQuery, AllUsersQueryQueryVariables>(AllUsersQueryDocument, options);
      }
export function useAllUsersQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQueryQuery, AllUsersQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsersQueryQuery, AllUsersQueryQueryVariables>(AllUsersQueryDocument, options);
        }
export function useAllUsersQuerySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AllUsersQueryQuery, AllUsersQueryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllUsersQueryQuery, AllUsersQueryQueryVariables>(AllUsersQueryDocument, options);
        }
export type AllUsersQueryQueryHookResult = ReturnType<typeof useAllUsersQueryQuery>;
export type AllUsersQueryLazyQueryHookResult = ReturnType<typeof useAllUsersQueryLazyQuery>;
export type AllUsersQuerySuspenseQueryHookResult = ReturnType<typeof useAllUsersQuerySuspenseQuery>;
export type AllUsersQueryQueryResult = Apollo.QueryResult<AllUsersQueryQuery, AllUsersQueryQueryVariables>;
export const namedOperations = {
  Query: {
    AllUsersQuery: 'AllUsersQuery'
  }
}