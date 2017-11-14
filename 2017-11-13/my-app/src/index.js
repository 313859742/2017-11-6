import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './component/App';

import { BrowserRouter as Router,
    Route,
    Link} from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
         <App />
    </Router>
    , 
    document.getElementById('root')
);
// registerServiceWorker();
if (module.hot) {
    module.hot.accept();
  }
