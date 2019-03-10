
import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListTodos from './ListTodos/ListTodos.js';
import { generate } from 'randomstring'

class App extends Component {
  state = {
    "entries": [
      {
        "key": generate(10),
        "FirstName": "Cathy" ,
        "LastName": "Pierce",
        "Birthday": "9/14/1996",
        "Telephone": "200-910-8132"
      },
      {
        "key": generate(10),
        "FirstName": "Alfonso",
        "LastName": "Cooley",
        "Birthday": "8/10/1973",
        "Telephone": "200-657-9362"
      },
      {
        "key": generate(10),
        "FirstName": "Victor",
        "LastName": "Gordon",
        "Birthday":  "8/3/1970",
        "Telephone": "200-661-9407"
      },
      {
        "key": generate(10),
        "FirstName": "Colleen",
        "LastName": "Wright",
        "Birthday": "10/28/1967", 
        "Telephone": "200-250-7949"
      },
      {
        "key": generate(10),
        "FirstName": "James",
        "LastName": "Johnston",
        "Birthday": "5/11/1972",
        "Telephone": "200-645-3176"
      },
      {
        "key": generate(10),
        "FirstName": "Anna",
        "LastName": "Reyes",
        "Birthday": "9/10/1975",
        "Telephone": "200-707-8670"
      }
    ],
    "collapse": false,
    "firstNameField": '',
    "lastNameField": '',
    "birthdayField": '',
    "telephoneField": ''
  }

  addEntryHandler = (event) => {
    event.preventDefault();
    let newEntry = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Birthday: this.state.Birthday,
      Telephone: this.state.Telephone
    };
    this.setState({entries:[...this.state.entries, newEntry]});
    this.setState({firstNameField:''});
    this.setState({lastNameField:''});
    this.setState({birthdayField: ''});
    this.setState({telephoneField: ''});
  }

  removeEntryHandler = (key, e) => {
    let entries = [...this.state.entries];
    let deleteIndex = entries.findIndex((item) => item.key === key);
    entries.splice(deleteIndex, 1);
    this.setState({"entries": entries});
  }

  render = () => {
    return (
      <div className="App">
        <Container>
          <header className="App-header text-left">
            <h1>React Based Address Book</h1>
          </header>
          <ListTodos 
            entries={this.state.entries}
            closer={this.removeEntryHandler}>
          </ListTodos>
          <h2 className='text-left'>Add An Entry</h2>
          <Form className="text-left" onSubmit={this.addEntryHandler}>
            <Form.Group controlId="formEntry">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter First Name" 
                value={this.state.firstNameField}
                onChange={(e) => this.setState({firstNameField: e.target.value})}/>
              
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name" 
                value={this.state.lastNameField}
                onChange={(e) => this.setState({lastNameField: e.target.value})}/>
              
              <Form.Label>Birthday</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter Birthday" 
                value={this.state.birthdayField}
                onChange={(e) => this.setState({birthdayField: e.target.value})}/>
              
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Phone Number" 
                value={this.state.telephoneField}
                onChange={(e) => this.setState({telephoneField: e.target.value})}/>
            </Form.Group>

            <Button variant="primary" type="submit" >Add Todo</Button>

          </Form>
        </Container>
      </div>
    );
  }
}

export default App;
