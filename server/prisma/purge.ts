import prisma from './client'

const purge = async () => {
    await prisma.user.deleteMany({})
    console.log('❌ Purged all users')
    await prisma.message.deleteMany({})
    console.log('❌ Purged all messages')
}

export default purge
