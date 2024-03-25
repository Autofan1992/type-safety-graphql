import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import {
    ApolloLink,
    Operation,
    FetchResult,
    Observable,
} from '@apollo/client/core';
import { print, GraphQLError } from 'graphql';
import { createClient, ClientOptions, Client } from 'graphql-sse';

class SSELink extends ApolloLink {
    private client: Client;

    constructor(options: ClientOptions) {
        super();
        this.client = createClient(options);
    }

    public request(operation: Operation): Observable<FetchResult> {
        return new Observable((sink) => {
            return this.client.subscribe<FetchResult>(
                { ...operation, query: print(operation.query) },
                {
                    next: sink.next.bind(sink),
                    complete: sink.complete.bind(sink),
                    error: sink.error.bind(sink),
                },
            );
        });
    }
}

export const link = new SSELink({
    url: 'http://localhost:4000/graphql',
});

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    link,
    cache: new InMemoryCache(),
})



ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ApolloProvider client={ client }>
            <App/>
        </ApolloProvider>
    </React.StrictMode>,
)
