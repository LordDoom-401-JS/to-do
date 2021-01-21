import React from 'react';
import { Navbar } from 'react-bootstrap';

import ToDo from './components/todo/todo.js';
import './app.scss';

// this is like module.export--


// =======Classes==========
// export default class App extends React.Component {
  //   render() {
    //     return (
      //       <>
      //         <ToDo />
      //       </>
      //     );
      //   }
      // }

//========Hooks============
const App = () => {
  return (
    <>
      <Navbar bg="primary" expand="lg">
        <Navbar.Brand href="#home"></Navbar.Brand>
      </Navbar>
      <ToDo/>
    </>
  );
}


export default App;