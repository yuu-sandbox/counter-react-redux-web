import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Counter from '@root/components/Counter';
import CounterFetch from '@root/components/CounterAsync';
import { fetchReqCount } from '@root/actionCreators/counterAsync';

function App() {
    const dispatch = useDispatch();
    return (
        <Router>
          <Switch>
            <Route exact path='/'>
              <>
                <Counter/>
                <CounterFetch
                  counter={useSelector(state => state.counterAsync.counter)}
                  onFetch={(amount = 1) => dispatch(fetchReqCount(amount))}
                />
              </>
            </Route>
          </Switch>
        </Router>
    );
}

export default App;
