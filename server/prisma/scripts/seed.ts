import purge from './purge'
import prisma from '../../lib/prisma'


export default async function main() {
    await purge()

    for await (const index of Array.from(Array(1).keys())) {
        await prisma.user.create({
            data: {
                name: `Bob ${ index + 1 }`,
                messages: {
                    create: [
                        {
                            body: 'Hello, Alice!',
                        },
                        {
                            body: 'Hello, Bob!',
                        }
                    ],
                },
            },
        })
    }

    console.log('✅ Seeded users and messages')
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