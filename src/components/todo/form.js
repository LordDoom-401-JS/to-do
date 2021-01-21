import React, { useState, useEffect } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

// The commented out sections are the class before the conversion
// class TodoForm extends React.Component {
const TodoForm = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = { item: {} };
  const [item, setItem] = useState({text: '', difficulty: 1, assignee: ''});

  // handleInputChange = e => {
  //   this.setState({ item: {...this.state.item, [e.target.name]: e.target.value } });
  // };
  const _changeInput = (e) => {
    setItem({...item, [e.target.name]: e.target.value});
  }
  
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   e.target.reset();
  //   this.props.handleSubmit(this.state.item);
  //   const item = {};
  //   this.setState({item});
  // };
  // runs when the item changes
  useEffect(() => {
    console.log(`useEffect says: `, item);
  }, [item])

  const _submitForm = (e) => {
    e.preventDefault();
    e.target.reset(); // reset form?
    let send = (item.text && item.difficulty && item.assignee) ? true : false;
    send && props.handleSubmit(item);
    setItem({});
  }
  // render() {
  //   return (
  //     <>
  //       <h3>Add Item</h3>
  //       <form onSubmit={this.handleSubmit}>
  //         <label>
  //           <span>To Do Item</span>
  //           <input
  //             name="text"
  //             placeholder="Add To Do List Item"
  //             onChange={this.handleInputChange}
  //           />
  //         </label>
  //         <label>
  //           <span>Difficulty Rating</span>
  //           <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={this.handleInputChange} />
  //         </label>
  //         <label>
  //           <span>Assigned To</span>
  //           <input type="text" name="assignee" placeholder="Assigned To" onChange={this.handleInputChange} />
  //         </label>
  //         <button>Add Item</button>
  //       </form>
  //     </>
  //   );
  // }
  return(
    <>  // this should be the buttons and input fields
      <Card>
        <Card.Header>Add Item of To Do</Card.Header>
        <Card.Body>
          <Form onSubmit={_submitForm}>

            <Form.Label>To Do Item
              <Form.Control name="text" data-testid="textInput" placeholder="Item Details" onBlur={_changeInput} />
            </Form.Label>

            <Form.Label>Assigned To
              <Form.Control type="text" data-testid="assigneeInput" name="assignee" placeholder="Assignee Name" onBlur= {_changeInput} />
            </Form.Label>

            <Form.Label>Difficulty
              <Form.Control type="range" data-testid="difficultyInput" name="difficulty" defaultValue="1" min="1" max="11" custom onBlur={_changeInput} />
            </Form.Label>

            <Button data-testid="submitButton" type="submit" variant="primary">Add Item</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default TodoForm;
