import purge from './purge'
import prisma from '../lib/prisma'

export default async function main() {
    await purge()

    const user = await prisma.user.create({
        data: {
            name: 'Alice',
            messages: {
                create: {
                    body: 'Hello, Bob!',
                },
            },
        },
    })

    console.log('✅ Seeded user')

    await prisma.message.createMany({
        data: [
            {
                body: 'Hello, Alice!',
                userId: user.id,
            },
            {
                body: 'Hi, Alice!',
                userId: user.id,
            },
        ],
    })

    console.log('✅ Seeded messages')
}

main()
    .then(() => {
    console.log('Data seeded 🌱')
    process.exit(0)
    })
    .catch((e) => {
    console.error(e)
    process.exit(1)
})