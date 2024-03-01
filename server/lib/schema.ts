import builder from "./builder";

// models
import "../models/message/Message";
import "../models/user/User";

// queries
import "../models/user/User.queries";
import { lexicographicSortSchema, printSchema } from "graphql";
import { writeFile, writeFileSync } from "fs";

const schema =  builder.toSchema({});

export default schema;

const schemaAsString = printSchema(lexicographicSortSchema(schema));

writeFileSync('./schema.graphql', schemaAsString);