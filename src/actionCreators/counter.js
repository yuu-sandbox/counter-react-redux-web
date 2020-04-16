import { createActions } from 'redux-actions';

import * as AT from '@root/actionTypes/counter';

export const { increment, decrement } = createActions({
    [AT.INCREMENT]: (amount = 1) => ({ amount }),
    [AT.DECREMENT]: (amount = 1) => ({ amount: -amount }),
});
