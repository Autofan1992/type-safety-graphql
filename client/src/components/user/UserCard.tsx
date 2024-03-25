import MessageCard from '../message/MessageCard'
import { UserFragment } from '../../graphql/queries/Users.generated'
import { useMessagesQuery } from '../../graphql/queries/Messages.generated'
import { useEffect } from 'react'

import {
    OnMessageAddedDocument,
    OnMessageAddedSubscription
} from '../../graphql/subscriptions/OnMessageAdded.generated'

type TUserCardProps = {
    user: UserFragment
}

function UserCard({ user }: TUserCardProps) {
    const { subscribeToMore, ...result } = useMessagesQuery()

    useEffect(() => subscribeToMore<OnMessageAddedSubscription>({
        document: OnMessageAddedDocument,
        updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev

            return {
                ...prev,
                messages: [subscriptionData.data.messageAdded, ...prev.messages]
            }
        }
    }), [])

    return (
        <div className="flex gap-x-24 justify-center">
            <div className="rounded-sm flex justify-center items-center drop-shadow-md bg-neutral-700 w-48 h-20">
                <p className="text-xl text-gray-200 font-bold">
                    { user.name }
                </p>
            </div>

            <div>
                { result.data?.messages.map((message, index) => (
                    <MessageCard key={ message.id } message={ message } index={ index }/>
                )) }
            </div>
        </div>
    )
}

export default UserCard