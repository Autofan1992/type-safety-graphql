import Branch from '../branch/Branch'
import { Message } from '../../graphql-generated/types'
import { MessageFragment } from '../../graphql/queries/Users.generated'

type TMessageCardProps = {
    message: MessageFragment
    index: number
}

function MessageCard({ message, index }: TMessageCardProps) {
    return (
        <div className="group mb-2 shrink-0 rounded-lg flex items-center drop-shadow-md bg-zinc-700 w-48 h-20 relative">
           <Branch trunk={index === 0} />
            <p className="text-sm text-gray-200 font-bold px-4">
                { message.body }
            </p>
        </div>
    )
}

export default MessageCard