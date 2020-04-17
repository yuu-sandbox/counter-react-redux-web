import { combineReducers } from 'redux';

import counterReducer from './counter';
import counterReducerAsync from './counterAsync';

const rootReducer = combineReducers({
    counterReducer,
    counterReducerAsync,
});
// const rootReducer = counterReducer;

export default rootReducer;
