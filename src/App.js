
import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListTodos from './ListTodos/ListTodos.js';

class App extends Component {
  state = {
    "entries": [
      {
        FirstName: "Cathy" ,
        LastName: "Pierce",
        Birthday: "9/14/1996",
        Telephone: "200-910-8132"
      },
      {
        FirstName: "Alfonso",
        LastName: "Cooley",
        Birthday: "8/10/1973",
        Telephone: "200-657-9362"
      },
      {
        FirstName: "Victor",
        LastName: "Gordon",
        Birthday:  "8/3/1970",
        Telephone: "200-661-9407"
      },
      {
        FirstName: "Colleen",
        LastName: "Wright",
        Birthday: "10/28/1967", 
        Telephone: "200-250-7949"
      },
      {
        FirstName: "James",
        LastName: "Johnston",
        Birthday: "5/11/1972",
        Telephone: "200-645-3176"
      },
      {
        FirstName: "Anna",
        LastName: "Reyes",
        Birthday: "9/10/1975",
        Telephone: "200-707-8670"
      }
    ],
    "collapse": false,
    "formTitle": '',
    "formDescription": ''
  }

  addTodoHandler = (event) => {
    event.preventDefault();
    let newEntry = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Birthday: this.state.Birthday,
      Telephone: this.state.Telephone
    };
    this.setState({todos:[...this.state.todos,newTodo]});
    this.setState({formTitle:''});
    this.setState({formDescription:''})
  }

  closeTodoHandler = (key,e) => {
    let todos = [...this.state.todos];
    let deleteIndex = todos.findIndex((item)=>item.key===key);
    todos.splice(deleteIndex, 1);
    this.setState({"todos":todos});
  }

  render = () => {
    return (
      <div className="App">
        <Container>
          <header className="App-header text-left">
            <h1>React Based ToDo List</h1>
          </header>
          <ListTodos 
            todos={this.state.todos}
            closer={this.closeTodoHandler}>
          </ListTodos>
          <h2 className='text-left'>Add A ToDo</h2>
          <Form className="text-left" onSubmit={this.addTodoHandler}>
            <Form.Group controlId="formToDo">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Title" 
                value={this.state.formTitle}
                onChange={(e) => this.setState({formTitle: e.target.value})}/>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" 
                rows="3" 
                placeholder="Enter Description" 
                value={this.state.formDescription}
                onChange={(e) => this.setState({formDescription:e.target.value})}/>
            </Form.Group>
            <Button variant="primary" type="submit" >
            Add Todo
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default App;
