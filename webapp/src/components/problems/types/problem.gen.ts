import * as Types from '../../../types/graphql.gen';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ProblemQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type ProblemQuery = { __typename?: 'Query', getProblem?: { __typename?: 'Problem', id: string, claimedAt?: any | null, created_at: any, detailedDescription?: string | null, requiredSkills?: Array<string | null> | null, shortDescription?: string | null, status: Types.ProblemStatus, title: string, updated_at: any } | null };


export const ProblemDocument = gql`
    query Problem($id: ID!) {
  getProblem(id: $id) {
    id
    claimedAt
    created_at
    detailedDescription
    requiredSkills
    shortDescription
    status
    title
    updated_at
  }
}
    `;

/**
 * __useProblemQuery__
 *
 * To run a query within a React component, call `useProblemQuery` and pass it any options that fit your needs.
 * When your component renders, `useProblemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProblemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProblemQuery(baseOptions: Apollo.QueryHookOptions<ProblemQuery, ProblemQueryVariables> & ({ variables: ProblemQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProblemQuery, ProblemQueryVariables>(ProblemDocument, options);
      }
export function useProblemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProblemQuery, ProblemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProblemQuery, ProblemQueryVariables>(ProblemDocument, options);
        }
export function useProblemSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProblemQuery, ProblemQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProblemQuery, ProblemQueryVariables>(ProblemDocument, options);
        }
export type ProblemQueryHookResult = ReturnType<typeof useProblemQuery>;
export type ProblemLazyQueryHookResult = ReturnType<typeof useProblemLazyQuery>;
export type ProblemSuspenseQueryHookResult = ReturnType<typeof useProblemSuspenseQuery>;
export type ProblemQueryResult = Apollo.QueryResult<ProblemQuery, ProblemQueryVariables>;
export const namedOperations = {
  Query: {
    Problem: 'Problem'
  }
}