import builder from './builder'

// models
import '../models/message/Message'
import '../models/user/User'

// queries
import '../models/user/User.queries'
import '../models/message/Message.queries'
import '../models/message/Message.subscriptions'
import '../models/message/Message.mutations'

import { lexicographicSortSchema, printSchema } from 'graphql'
import { writeFileSync } from 'fs'
import { DateResolver } from 'graphql-scalars'

builder.subscriptionType({})

builder.queryType({})

builder.mutationType({})

builder.addScalarType('Date', DateResolver)

const schema = builder.toSchema({})

export default schema

const schemaAsString = printSchema(lexicographicSortSchema(schema))

writeFileSync('./schema.graphql', schemaAsString)