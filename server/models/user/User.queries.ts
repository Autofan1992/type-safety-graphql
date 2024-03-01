import prisma from "../../lib/prisma";
import builder from "../../lib/builder";

builder.queryField("users", (t) =>
    t.prismaField({
        type: ["User"],
        resolve: async (query, root, args, ctx, info) => {
            return prisma.user.findMany({ ...query });
        },
    })
);
