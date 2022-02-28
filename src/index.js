import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {UserContextProvider} from './components/store/UserContext';
import {CourseContextProvider} from './components/store/CourseContext';

ReactDOM.render(
<UserContextProvider>
    <CourseContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CourseContextProvider>
</UserContextProvider>,document.getElementById('root')
);



