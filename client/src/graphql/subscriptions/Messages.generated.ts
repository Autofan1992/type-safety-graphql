import * as Types from '../../graphql-generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MessagesSubscriptionSubscriptionVariables = Types.Exact<{ [key: string]: never; }>;


export type MessagesSubscriptionSubscription = { __typename?: 'Subscription', messages: { __typename?: 'Message', id: string, body: string } };


export const MessagesSubscriptionDocument = gql`
    subscription MessagesSubscription {
  messages {
    id
    body
  }
}
    `;

/**
 * __useMessagesSubscriptionSubscription__
 *
 * To run a query within a React component, call `useMessagesSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessagesSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesSubscriptionSubscription({
 *   variables: {
 *   },
 * });
 */
export function useMessagesSubscriptionSubscription(baseOptions?: Apollo.SubscriptionHookOptions<MessagesSubscriptionSubscription, MessagesSubscriptionSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MessagesSubscriptionSubscription, MessagesSubscriptionSubscriptionVariables>(MessagesSubscriptionDocument, options);
      }
export type MessagesSubscriptionSubscriptionHookResult = ReturnType<typeof useMessagesSubscriptionSubscription>;
export type MessagesSubscriptionSubscriptionResult = Apollo.SubscriptionResult<MessagesSubscriptionSubscription>;