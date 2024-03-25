import UserCard from './components/user/UserCard'
import { useUsersQuery } from './graphql/queries/Users.generated'


export default function App() {
    const { data, loading, error } = useUsersQuery()

    if (error) return <p>Error :(</p>
    const users = data?.users ?? []

    return (
        <div
            className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-y-auto">
            { loading ? (<p>Loading...</p>) :
                <div className="grid grid-cols-3 gap-5">
                    { users.map((user) => (
                        <UserCard key={ user.id } user={ user }/>
                    )) }
                </div>
            }
        </div>
    )
}