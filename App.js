import React from 'react';
import configureStore from './src/bundles';
import { Provider } from 'redux-bundler-react';
import Navigation from './src/navigation/rootNavigator';
const { modifiedStore } = configureStore({});
const store = modifiedStore;
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);
console.disableYellowBox = true;


export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
