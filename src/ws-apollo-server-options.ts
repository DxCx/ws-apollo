import { ServerOptions } from 'subscriptions-transport-ws/dist/server';
import ApolloOptions from 'apollo-server/dist/integrations/apolloOptions';

export interface IWsApolloServerOptions extends ServerOptions, ApolloOptions {

}
