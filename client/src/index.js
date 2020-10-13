import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom"
import 'react-notifications-component/dist/theme.css'

ReactDOM.render(
<Router>
<App />
</Router>
, document.getElementById('root'));