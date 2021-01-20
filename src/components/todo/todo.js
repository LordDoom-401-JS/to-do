import React, { useState, useEffect } from 'react';
import { Navbar, Card, Container } from 'react-bootstrap';
import TodoForm from './form.js';
import TodoList from './list.js';

import './todo.scss';

// class ToDo extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       list: [],
//     };
//   }
// ====previous code in classes is commented out for reference===== 
const ToDo = () => {
  const [count, setCount] = useState();
  const [list, setList] = useState([
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
  ]);
  // addItem = (item) => {
  //   item._id = Math.random();
  //   item.complete = false;
  //   this.setState({ list: [...this.state.list, item]});
  // };
  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };
  // toggleComplete = id => {
  //   let item = this.state.list.filter(i => i._id === id)[0] || {};
  //   if (item._id) {
  //     item.complete = !item.complete;
  //     let list = this.state.list.map(listItem => listItem._id === item._id ? item : listItem);
  //     this.setState({list});
  //   }
  // };
  const toggleComplete = (id) => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.compete;
      setList(list.map(listItem => listItem._id === item._id ? item : listItem));
    }
  };
  // componentDidMount() {
  //   let list = [
  //     { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
  //     { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
  //     { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
  //     { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
  //     { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
  //   ];
  //   this.setState({list});
  // }
  useEffect(() => {
    setCount(list.filter(item => !item.complete).length);
  }, [list]);
  useEffect(() => {
    document.title = `To Do List: (${count})`;    
  }, [count]);
  //   render() {
  //     return (
  //       <>
  //         <header>
  //           <h2>
  //           There are {this.state.list.filter(item => !item.complete).length} Items To Complete
  //           </h2>
  //         </header>
  
  //         <section className="todo">
  
  //           <div>
  //             <TodoForm handleSubmit={this.addItem} />
  //           </div>
  
  //           <div>
  //             <TodoList
  //               list={this.state.list}
  //               handleComplete={this.toggleComplete}
  //             />
  //           </div>
  //         </section>
  //       </>
  //     );
  //   }
  // }
  return (
    <Container>
      <br/>
      <Card variant="dark">
      <Card.Header bg="dark">To Do List Manager ({count})</Card.Header>
      <Card.Body>
        <section className="todo">
          <div>
            <TodoForm handleSubmit={addItem} />
          </div>

          <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
              />
          </div>
        </section>
      </Card.Body>
      </Card>
    </Container>
  );
}


export default ToDo;
