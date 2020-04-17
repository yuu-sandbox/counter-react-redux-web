import { createActions } from 'redux-actions';

import * as AT from '@root/actionTypes/counter';

export const { fetchReqCount, countFetchSucc } = createActions({
    [AT.FETCH_REQ_COUNT]: (amount) => ({ amount: amount }),
    [AT.COUNT_FETCH_SUCC]: (count) => ({ count: count }),
});
