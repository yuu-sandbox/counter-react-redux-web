import React, { useState, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as ActionCreator from '@root/actionCreators/counter';

import counterReducer from '@root/reducers/counter';

const CounterInner = ({ counter, onIncrement, onDecrement }) => {
    return (
        <>
          <p>
            <span>count: </span><span>{counter}</span>
          </p>
          <p>
            <button onClick={ onIncrement }>increment</button>
            <button onClick={ onDecrement }>decrement</button>
          </p>
        </>
    );
};

const Counter = () => {
    /* TOP Layer redux data flow
     */
    const counter = useSelector(state => state.counterReducer.counter);
    const dispatch = useDispatch();
    const onIncrement = () => dispatch(ActionCreator.increment());
    const onDecrement = () => dispatch(ActionCreator.decrement());

    /* React state by hooks
     */
    // const [counter, setCounter] = useState(0);
    // const onIncrement = () => setCounter(counter + 1);
    // const onDecrement = () => setCounter(counter - 1);

    /* redux in child component
     */
    // const defaultState = { counter: 0 };
    // const [state, dispatch] = useReducer(counterReducer, defaultState);
    // const counter = state.counter;
    // const onIncrement = () => dispatch(ActionCreator.increment());
    // const onDecrement = () => dispatch(ActionCreator.decrement());

    return CounterInner({counter, onIncrement, onDecrement});
};

export default Counter;
