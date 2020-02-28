import ApolloClient from 'apollo-boost';
import {graphql} from "graphql";

const client = new ApolloClient({
    uri: 'https://nodejs.e-pasar.id/graphql',
});

export default class  ApolloService {
    static get environment() {
        return client
    }
}
