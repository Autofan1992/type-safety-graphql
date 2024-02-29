import { User } from '../../types'
import MessageCard from '../message/MessageCard.tsx'

type TUserCardProps = {
    user: User
}

function UserCard({ user }: TUserCardProps) {
    return (
        <div className="flex gap-x-24 justify-center">
            <div className="rounded-sm flex justify-center items-center drop-shadow-md bg-neutral-700 w-48 h-20">
                <p className="text-xl text-gray-200 font-bold">
                    { user.name }
                </p>
            </div>

            <div>
                { user.messages.map((message, index) => (
                    <MessageCard key={ index } message={ message } index={ index }/>
                )) }
            </div>
        </div>
    )
}

export default UserCard