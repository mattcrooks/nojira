import * as Types from '../../../types/graphql.gen';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetUsernameQueryVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
}>;


export type GetUsernameQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', name: string } | null };


export const GetUsernameDocument = gql`
    query GetUsername($name: String!) {
  getUser(name: $name) {
    name
  }
}
    `;

/**
 * __useGetUsernameQuery__
 *
 * To run a query within a React component, call `useGetUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsernameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetUsernameQuery(baseOptions: Apollo.QueryHookOptions<GetUsernameQuery, GetUsernameQueryVariables> & ({ variables: GetUsernameQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsernameQuery, GetUsernameQueryVariables>(GetUsernameDocument, options);
      }
export function useGetUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsernameQuery, GetUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsernameQuery, GetUsernameQueryVariables>(GetUsernameDocument, options);
        }
export function useGetUsernameSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUsernameQuery, GetUsernameQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsernameQuery, GetUsernameQueryVariables>(GetUsernameDocument, options);
        }
export type GetUsernameQueryHookResult = ReturnType<typeof useGetUsernameQuery>;
export type GetUsernameLazyQueryHookResult = ReturnType<typeof useGetUsernameLazyQuery>;
export type GetUsernameSuspenseQueryHookResult = ReturnType<typeof useGetUsernameSuspenseQuery>;
export type GetUsernameQueryResult = Apollo.QueryResult<GetUsernameQuery, GetUsernameQueryVariables>;
export const namedOperations = {
  Query: {
    GetUsername: 'GetUsername'
  }
}