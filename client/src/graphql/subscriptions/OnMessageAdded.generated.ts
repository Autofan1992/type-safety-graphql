import * as Types from '../../graphql-generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type OnMessageAddedSubscriptionVariables = Types.Exact<{ [key: string]: never; }>;


export type OnMessageAddedSubscription = { __typename?: 'Subscription', messageAdded: { __typename?: 'Message', id: string, body: string } };


export const OnMessageAddedDocument = gql`
    subscription OnMessageAdded {
  messageAdded {
    id
    body
  }
}
    `;

/**
 * __useOnMessageAddedSubscription__
 *
 * To run a query within a React component, call `useOnMessageAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnMessageAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnMessageAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnMessageAddedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnMessageAddedSubscription, OnMessageAddedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnMessageAddedSubscription, OnMessageAddedSubscriptionVariables>(OnMessageAddedDocument, options);
      }
export type OnMessageAddedSubscriptionHookResult = ReturnType<typeof useOnMessageAddedSubscription>;
export type OnMessageAddedSubscriptionResult = Apollo.SubscriptionResult<OnMessageAddedSubscription>;