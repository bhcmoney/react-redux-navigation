import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from "./components/LoginForm";

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDgEL2ktg-fwzgmxtIprPIIVV4SxSf3FM0',
            authDomain: 'manager-f4203.firebaseapp.com',
            databaseURL: 'https://manager-f4203.firebaseio.com',
            projectId: 'manager-f4203',
            storageBucket: '',
            messagingSenderId: '275201599975'
          };
          firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
    }
}

export default App;