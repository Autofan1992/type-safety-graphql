import builder from "../../lib/builder";
import prisma from '../../lib/prisma'

builder.mutationField("createMessage", (t) =>
    t.prismaField({
        type: 'Message',
        args: {
            title: t.arg.string({ required: true }),
            content: t.arg.string({ required: true }),
        },
        resolve: async (query, root, args, ctx) => {
            const author = await prisma.user.findFirstOrThrow()
            const message = await prisma.message.create({
                ...query,
                data: {
                    body: args.content,
                    user: {
                        connect: { id: author.id },
                    },
                },
            })

            ctx.pubsub.publish('messages', {
                message,
            })

            return message
        },
    })
);
