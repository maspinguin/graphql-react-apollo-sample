import React from 'react';
import {gql} from "apollo-boost";
import {useQuery} from "@apollo/react-hooks";

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

const Pasar = (props) => {
    const { loading, error, data } = useQuery(query);
    // console.log('loading', loading);
    // console.log('error', error);
    // console.log('data', data);
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;

    return (
        <div>
            <h1>Pasar List</h1>
        </div>
    );
};

export default Pasar;
