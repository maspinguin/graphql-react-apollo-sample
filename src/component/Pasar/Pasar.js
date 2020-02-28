import React from 'react';
import {gql} from "apollo-boost";

const query = gql`
    {
        viewer {
            pasars(first: 3){
                edges {
                    node {
                        id
                        plainId
                        namaPasar
                    }
                }
            }
        }
    }
`;

export default class Pasar extends React.Component{
    render() {
        return (
            <div>
                <h1>Pasar List</h1>
            </div>
        );
    }
}
