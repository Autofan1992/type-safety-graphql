import builder from "../../lib/builder";
import prisma from '../../lib/prisma'

builder.queryField("messages", (t) =>
    t.prismaField({
        type: ["Message"],
        resolve: async (query, root, args, ctx, info) => {
            return prisma.message.findMany({ ...query });
        },
    })
);
