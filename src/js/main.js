// main.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import add from './newTypeScript.ts';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div>Sum: {add(1, 2)}</div>
  </React.StrictMode>,
  document.getElementById('root')
);
