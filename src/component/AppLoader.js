import React from 'react';
import App from "./App";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloService from "../service/ApolloService";
import {gql} from "apollo-boost";

const client = ApolloService.environment.query({
    query: gql`
        {
            viewer {
                id
            }
        }
    `
})
export default class AppLoader extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div>
                    App
                    <App/>
                </div>
            </ApolloProvider>
        );
    }
};
