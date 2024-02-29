import { User } from './types'
import UserCard from './components/user/UserCard.tsx'

const users: User[] = [
    {
        name: "John",
        messages: [
            {
                body: "Hello World"
            },
            {
                body: "Hello World 2"
            }
        ]
    }
]

export default function App() {

    return (
       <div className='bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 owerfllow-scroll'>
           {users.map((user, index) => (
               <UserCard key={index} user={user} />
           ))}
       </div>
    )
}