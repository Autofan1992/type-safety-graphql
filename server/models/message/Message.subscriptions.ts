import builder from "../../lib/builder";

builder.subscriptionField("messageAdded", (t) =>
    t.prismaField({
        type: 'Message',
        subscribe: (root, args, ctx) => ctx.pubsub.subscribe('messages'),
        resolve: (query, { message }, args) => message,
    })
);
