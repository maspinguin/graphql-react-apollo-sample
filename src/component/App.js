import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Pasar from './Pasar/Pasar';
export default class App extends React.Component{
    render() {
        return (
            <div>
                <Router>
                        <Switch>
                            <Route
                                exact
                                path={'/'}
                                title={'Pasar'}
                                render={props => <Pasar {...props}/>}
                            />
                        </Switch>
                </Router>
            </div>
        );
    }
}
