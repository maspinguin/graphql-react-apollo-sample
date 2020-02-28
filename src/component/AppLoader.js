import React from 'react';
import App from "./App";

export default class AppLoader extends React.Component {
    render() {
        return (
            <div>
                App
                <App/>
            </div>
        );
    }
};
