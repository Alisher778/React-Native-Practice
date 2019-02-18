import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux'; 
import App from './App';
import configStore from './src/store/configStore';
import {name as appName} from './app.json';

const store = configStore();
const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);
AppRegistry.registerComponent(appName, () => RNRedux);
