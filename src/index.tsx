import React from 'react';
import ReactDOM from 'react-dom';

import { unregister as unregisterServiceWorker } from './serviceWorker';

import App from './pages/App';

import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

unregisterServiceWorker();
