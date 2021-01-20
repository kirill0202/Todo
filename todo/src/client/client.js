import { ApolloClient } from 'apollo-client';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

export const start = ({ apiURI, wsURI }) => {
  const wsLink = new WebSocketLink({
    uri: wsURI,
    options: { reconnect: true },
  });
  const httpLink = new HttpLink({
    uri: apiURI, 
    credentials: 'same-origin', 
  });
  
  return new ApolloClient({
    link: split(
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      wsLink,
      httpLink
    ),
    cache: new InMemoryCache(),
  });
};

export default { start };
