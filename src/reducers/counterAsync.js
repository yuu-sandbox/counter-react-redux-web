import { handleActions } from 'redux-actions';
import { fetchReqCount, countFetchSucc } from '@root/actionCreators/counterAsync';

const defaultState = { isFetching: false, counter: 0 };

const counterReducerAsync = handleActions({
    [fetchReqCount]: (state, action) => {
        console.log('counterReducerAsync fetch request called');
        return ({ ...state, isFetching: true });
    },
    [countFetchSucc]: (state, { payload: { count } }) => ({ ...state, isFetching: false, counter: count }),
}, defaultState);

export default counterReducerAsync;
