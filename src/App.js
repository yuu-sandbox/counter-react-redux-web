import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Counter from '@root/components/Counter';
import CounterAsync from '@root/components/CounterAsync';

function App() {
    return (
        <Router>
          <Switch>
            <Route exact path='/'>
              <>
                <Counter/>
                <CounterAsync/>
              </>
            </Route>
          </Switch>
        </Router>
    );
}

export default App;
