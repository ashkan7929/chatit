import { applyMiddleware, createStore } from "redux";
import reducer from './Reeducers';
import makeSagaMiddleware from 'redux-saga'
import sagaApi from './Saga'

const sagaMiddleware = makeSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(sagaApi);

export default store;