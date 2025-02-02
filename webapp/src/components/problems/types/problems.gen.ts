import * as Types from '../../../types/graphql.gen';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ProblemsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ProblemsQuery = { __typename?: 'Query', queryProblem?: Array<{ __typename?: 'Problem', id: string, claimedAt?: any | null, created_at: any, detailedDescription?: string | null, requiredSkills?: Array<string | null> | null, shortDescription?: string | null, status: Types.ProblemStatus, title: string, updated_at: any } | null> | null };

export type UpdateTitleMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Array<Types.Scalars['ID']['input']> | Types.Scalars['ID']['input']>;
  title: Types.Scalars['String']['input'];
}>;


export type UpdateTitleMutation = { __typename?: 'Mutation', updateProblem?: { __typename?: 'UpdateProblemPayload', numUids?: number | null } | null };


export const ProblemsDocument = gql`
    query Problems {
  queryProblem {
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
 * __useProblemsQuery__
 *
 * To run a query within a React component, call `useProblemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProblemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProblemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProblemsQuery(baseOptions?: Apollo.QueryHookOptions<ProblemsQuery, ProblemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProblemsQuery, ProblemsQueryVariables>(ProblemsDocument, options);
      }
export function useProblemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProblemsQuery, ProblemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProblemsQuery, ProblemsQueryVariables>(ProblemsDocument, options);
        }
export function useProblemsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProblemsQuery, ProblemsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProblemsQuery, ProblemsQueryVariables>(ProblemsDocument, options);
        }
export type ProblemsQueryHookResult = ReturnType<typeof useProblemsQuery>;
export type ProblemsLazyQueryHookResult = ReturnType<typeof useProblemsLazyQuery>;
export type ProblemsSuspenseQueryHookResult = ReturnType<typeof useProblemsSuspenseQuery>;
export type ProblemsQueryResult = Apollo.QueryResult<ProblemsQuery, ProblemsQueryVariables>;
export const UpdateTitleDocument = gql`
    mutation UpdateTitle($id: [ID!], $title: String!) {
  updateProblem(input: {filter: {id: $id}, set: {title: $title}}) {
    numUids
  }
}
    `;
export type UpdateTitleMutationFn = Apollo.MutationFunction<UpdateTitleMutation, UpdateTitleMutationVariables>;

/**
 * __useUpdateTitleMutation__
 *
 * To run a mutation, you first call `useUpdateTitleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTitleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTitleMutation, { data, loading, error }] = useUpdateTitleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useUpdateTitleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTitleMutation, UpdateTitleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTitleMutation, UpdateTitleMutationVariables>(UpdateTitleDocument, options);
      }
export type UpdateTitleMutationHookResult = ReturnType<typeof useUpdateTitleMutation>;
export type UpdateTitleMutationResult = Apollo.MutationResult<UpdateTitleMutation>;
export type UpdateTitleMutationOptions = Apollo.BaseMutationOptions<UpdateTitleMutation, UpdateTitleMutationVariables>;
export const namedOperations = {
  Query: {
    Problems: 'Problems'
  },
  Mutation: {
    UpdateTitle: 'UpdateTitle'
  }
}