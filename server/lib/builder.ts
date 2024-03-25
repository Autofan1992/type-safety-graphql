import SchemaBuilder from "@pothos/core";
import { DateResolver } from "graphql-scalars";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import prisma from "./prisma";
import { MutationType, pubsub } from './pubsub'

export const builder = new SchemaBuilder<{
    Scalars: {
        Date: { Input: Date; Output: Date };
    };
    PrismaTypes: PrismaTypes;
    Context: { pubsub: typeof pubsub };
}>({ plugins: [PrismaPlugin], prisma: { client: prisma } });



export default builder;
