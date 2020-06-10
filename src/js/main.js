// main.js

import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './demo.tsx'

ReactDOM.render(
  <React.StrictMode>
      <Demo message="Hello" />
  </React.StrictMode>,
  document.getElementById('root')
);
