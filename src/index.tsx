<<<<<<< HEAD
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

=======
import React from 'react';
import ReactDOM from 'react-dom';
import Desktop from './Desktop';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Desktop />
  </React.StrictMode>,
  document.getElementById('root')
);
>>>>>>> 21d7be62d554915787485641c4ea1187492767dd
