import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import GoogleApiWrapper from '../Pages/HomePage';
import Search from '../Pages/Search';

class Routes extends Component {
    render() { 
        return (
            <div>
                <Switch>
                    <Route exact path='/Home' component={GoogleApiWrapper} />
                    <Route exact path='/Search' component={Search} />

                    <Redirect to='/Home' />
                </Switch>
            </div>
        );
    }
}
 
export default Routes;