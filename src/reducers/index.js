import { combineReducers } from 'redux';

import counterReducer from './counter';
import counterReducerAsync from './counterAsync';

const rootReducer = combineReducers({
    counter: counterReducer,
    counterAsync: counterReducerAsync,
});
// const rootReducer = counterReducer;

export default rootReducer;
