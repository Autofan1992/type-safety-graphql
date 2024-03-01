import SchemaBuilder from "@pothos/core";
import { DateResolver } from "graphql-scalars";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import prisma from "./prisma";

export const builder = new SchemaBuilder<{
    Scalars: {
        Date: { Input: Date; Output: Date };
    };
    PrismaTypes: PrismaTypes;
}>({ plugins: [PrismaPlugin], prisma: { client: prisma } });

builder.queryType({});
// builder.mutationType({});

builder.addScalarType("Date", DateResolver);

export default builder;
