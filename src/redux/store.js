import {applyMiddleware, compose, createStore} from 'redux';
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-community/async-storage";
import {reducers} from "./reducers";

const persistedReducer = persistReducer({
    key: "root",
    storage: AsyncStorage
}, reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)));

const persistor = persistStore(store);

export {store, persistor};
