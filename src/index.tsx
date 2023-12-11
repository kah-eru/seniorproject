import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import React from 'react';
import Desktop from './Desktop';



ReactDOM.render(
  <Router>
    <Desktop />
    </Router>,
      document.getElementById('root')
      );

