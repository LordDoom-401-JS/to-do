import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// class Main extends React.Component {
//   render() {
//     return <App />;
//   }
// }
// const rootElement = document.getElementById('root');
// ReactDOM.render(<Main />, rootElement);
