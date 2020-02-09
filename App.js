import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import { store, persistor } from './src/redux/store';
import AppLoading from './src/navigators/appLoading';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppLoading/>
            </PersistGate>
        </Provider>
    );
};

export default App;
