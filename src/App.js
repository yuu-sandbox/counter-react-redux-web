import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Counter from '@root/components/Counter';

function App() {
    return (
        <Router>
          <Switch>
            <Route exact path='/' component={Counter} />
          </Switch>
        </Router>
    );
}

export default App;
