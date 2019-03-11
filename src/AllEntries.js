
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function AllEntries(props) {

  let originalEntries = [...props.originalEntries];
  let addressBook = originalEntries.map((item) =>
    <ListGroup.Item key={item.key} id="card">
      <Card className="bg-light border rounded">
        <span key={item.key} className="text-right" onClick={props.closer.bind(null, item.key)}><b id="delete-text">Click twice to delete -></b> <i class="fa fa-trash fa-2x"></i></span>
          <Card.Body className="text-left">
            <p><b>First Name:</b> {item.FirstName}</p>
            <p><b>Last Name:</b> {item.LastName}</p>
            <p><b>Birthday:</b> {item.Birthday}</p>
            <p><b>Telephone:</b> {item.Telephone}</p>
          </Card.Body>
        </Card>
    </ListGroup.Item>
    );

  return addressBook;
}

export default AllEntries;