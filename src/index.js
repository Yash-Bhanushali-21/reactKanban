import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store,persistor} from './store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import 'typeface-roboto';


ReactDOM.render(
  <Provider store = {store}> 
   <PersistGate persistor = {persistor}>
    <App />
    </PersistGate>
    </Provider> 
,
  document.getElementById('root')
);

