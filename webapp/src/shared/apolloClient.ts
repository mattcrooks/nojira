import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://green-feather-41451536.ap-south-1.aws.cloud.dgraph.io/graphql',
    cache: new InMemoryCache(),
});

export default client;