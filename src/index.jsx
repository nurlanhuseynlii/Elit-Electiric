
import React from 'react';
import ReactDom  from 'react-dom/client'
import App from './App'
import '../src/assets/sass/style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)