import { SubscriptionServer } from 'subscriptions-transport-ws';
import { Server } from 'http';
import { IWsApolloServerOptions } from './ws-apollo-server-options';
import { runQuery, QueryOptions } from 'apollo-server/dist/core/runQuery';
import { GraphQLResult } from 'graphql';

export class WsApolloServer extends SubscriptionServer {
    constructor(options: IWsApolloServerOptions, httpServer: Server) {
        super(options, httpServer);
    }

    public runQuery(query: QueryOptions): Promise<GraphQLResult> {
        return runQuery(query);
    }
}
