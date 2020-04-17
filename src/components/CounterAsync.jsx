import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as AC from '@root/actionCreators/counterAsync';

const CounterFetch = ({ counter, onFetch }) => {
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

export default CounterFetch;
