import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from './User/reducers';
import { productsReducer } from './Products/reducers';

export const rootReducer = combineReducers({
    user: userReducer,
    productsData: productsReducer,
})

const configStorage = {
    key: 'root',
    storage,
    whitelist: ['cartData']
}

export default persistReducer(configStorage, rootReducer);