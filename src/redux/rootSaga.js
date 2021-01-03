import { all, call } from 'redux-saga/effects';

import userSagas from './User/sagas';
import productsSagas from './Products/sagas';
import ordersSagas from './Orders/sagas';

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(productsSagas),
        call(ordersSagas),
    ])
};