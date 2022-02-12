import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {UserContextProvider} from './components/store/UserContext';


ReactDOM.render(
<UserContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</UserContextProvider>,document.getElementById('root')
);



