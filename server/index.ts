import { createServer } from 'http'
import { createYoga } from 'graphql-yoga'
import schema from './lib/schema'
import { pubsub } from './lib/pubsub'

const port = Number(process.env.API_PORT) || 4000

const yoga = createYoga({
    schema,
    context: {
        pubsub
    }
})

const server = createServer(yoga)

server.listen(port, () => {
    console.info('Server is running on http://localhost:4000/graphql')
})