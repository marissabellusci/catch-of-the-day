import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';


// Router is stateless functional component
const Router = () => {
   return( <BrowserRouter>
    <Switch>
        <Route exact path="/" component={StorePicker}></Route>
        <Route path="/Store/:StoreId" component={App}></Route>
        <Route component={NotFound} />
        
    </Switch>
    </BrowserRouter>
   )
}

export default Router;