
import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import AllEntries from './AllEntries.js';
import { generate } from 'randomstring';

class App extends Component {
  state = {
    "originalEntries": [
      {
        "key": generate(10),
        "FirstName": "Cathy" ,
        "LastName": "Pierce",
        "Birthday": "9/14/1996",
        "Telephone": "200-910-8132",
        "pressDeleteCounter": 0
      },
      {
        "key": generate(10),
        "FirstName": "Alfonso",
        "LastName": "Cooley",
        "Birthday": "8/10/1973",
        "Telephone": "200-657-9362",
        "pressDeleteCounter": 0
      },
      {
        "key": generate(10),
        "FirstName": "Victor",
        "LastName": "Gordon",
        "Birthday":  "8/3/1970",
        "Telephone": "200-661-9407",
        "pressDeleteCounter": 0
      },
      {
        "key": generate(10),
        "FirstName": "Colleen",
        "LastName": "Wright",
        "Birthday": "10/28/1967", 
        "Telephone": "200-250-7949",
        "pressDeleteCounter": 0
      },
      {
        "key": generate(10),
        "FirstName": "James",
        "LastName": "Johnston",
        "Birthday": "5/11/1972",
        "Telephone": "200-645-3176",
        "pressDeleteCounter": 0
      },
      {
        "key": generate(10),
        "FirstName": "Anna",
        "LastName": "Reyes",
        "Birthday": "9/10/1975",
        "Telephone": "200-707-8670",
        "pressDeleteCounter": 0
      }
    ],
    "collapse": false,
    "firstNameField": '',
    "lastNameField": '',
    "birthdayField": '',
    "telephoneField": '',
    "searchText": ''
  }

  originalEntriesCopy = [...this.state.originalEntries];

  addEntryHandler = (event) => {
    event.preventDefault();
    let newEntry = {
      key: generate(10),
      FirstName: this.state.firstNameField,
      LastName: this.state.lastNameField,
      Birthday: this.state.birthdayField,
      Telephone: this.state.telephoneField,
      pressDeleteCounter: 0
    };
    this.originalEntriesCopy.push(newEntry);
    this.setState({originalEntries:[...this.state.originalEntries, newEntry]});
    this.setState({firstNameField:''});
    this.setState({lastNameField:''});
    this.setState({birthdayField: ''});
    this.setState({telephoneField: ''});
  }

  removeEntryHandler = (key, e) => {
    let originalEntries = [...this.state.originalEntries];
    // Finds index that may be deleted
    let deleteIndex = originalEntries.findIndex((item) => item.key === key);
    let willDelete = false;
    originalEntries.forEach(item => {
      if (item.key === key) {
        if (item.pressDeleteCounter < 2) {
          item.pressDeleteCounter = item.pressDeleteCounter + 1;
          if (item.pressDeleteCounter === 2) {
            willDelete = true;
          }
        }
      }
    });

    // actually deletes
    if (willDelete) {
      originalEntries.splice(deleteIndex, 1);
      this.originalEntriesCopy = originalEntries;
      this.setState({"originalEntries": originalEntries});
    }
  }

  searchHandler = (char) => {
    if (char === '') {
      this.setState({"originalEntries": this.originalEntriesCopy});
    }
    else {
      let toBeFiltered = [...this.originalEntriesCopy];
      let filteredEntries = [];
      toBeFiltered.forEach(item => {
        if (item.FirstName.toLowerCase().includes(char.toLowerCase()) || item.LastName.toLowerCase().includes(char.toLowerCase()) || item.Birthday.includes(char) || item.Telephone.includes(char)) {
          filteredEntries.push(item);
        }
      });
      this.setState({"originalEntries": filteredEntries});
    }
  }

  render = () => {
    return (
      <div className="App">
        <Container>
          <header>
            <br />
            <h1>Address Book</h1>
          </header>
          <Form>
            <Form.Row>
              <Col>
              </Col>
              <Col>
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Search for Entries" onKeyDown={e => this.searchHandler(e.target.value)}/>
              </Col>
            </Form.Row>
            </Form>
            <br />
          <AllEntries 
            originalEntries={this.state.originalEntries}
            closer={this.removeEntryHandler}>
          </AllEntries>
          <br />
          <h2 className='text-center'>Add An Entry</h2>
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

            <Button variant="primary" type="submit" >Add Entry</Button>

          </Form>
        </Container>
      </div>
    );
  }
}

export default App;
