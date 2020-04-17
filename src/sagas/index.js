// https://github.com/redux-saga/redux-saga/blob/master/README_ja.md
import { call, put, takeEvery } from 'redux-saga/effects';

import { FETCH_REQ_COUNT } from '@root/actionTypes/counter';
import { countFetchSucc } from '@root/actionCreators/counterAsync';
import { fetchNextCount } from '@root/services/counterAsync';

function* fetchCount({ payload: { amount } }) {
    const count = yield call(fetchNextCount, amount);
    yield put(countFetchSucc(count));
}

function* rootSaga() {
    yield takeEvery(FETCH_REQ_COUNT, fetchCount);
}

export default rootSaga;
