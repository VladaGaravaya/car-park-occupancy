import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import CarParks from './CarPark';
import Home from './Home';

const App = () => (
    <HashRouter>
        <div className="App">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/carparks" component={CarParks} />
            </Switch>
        </div>
    </HashRouter>
);

export default App;
