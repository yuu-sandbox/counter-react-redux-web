import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as AC from '@root/actionCreators/counterAsync';

const CounterInner = ({ counter, onFetch }) => {
    return (
        <>
          <p>
            <span>count: </span><span>{counter}</span>
          </p>
          <p>
            <button onClick={ () => onFetch(counter) }>fetch</button>
          </p>
        </>
    );
};

const CounterAsync = () => {
    /* TOP Layer redux data flow
     */
    const counter = useSelector(state => state.counterReducerAsync.counter);
    const dispatch = useDispatch();
    const onFetch = (amount = 1) => dispatch(AC.fetchReqCount(amount));

    return CounterInner({counter, onFetch});
};

export default CounterAsync;
