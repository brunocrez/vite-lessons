import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4raqz8c0s4u01yxb4tq012t/master',
  cache: new InMemoryCache()
})