import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//redux store
import { Provider } from 'react-redux';
import rootReducer from './redux/reducer';
import { createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const store= createStore(rootReducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

