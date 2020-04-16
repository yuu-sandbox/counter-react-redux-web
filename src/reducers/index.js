import { combineReducers } from 'redux';

import counterReducer from './counter';

const rootReducer = combineReducers({
    counterReducer,
});
// const rootReducer = counterReducer;

export default rootReducer;
