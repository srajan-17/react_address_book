
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function AllEntries (props) {

  let entries = [...props.entries];
  let addressBook = entries.map((item)=>
    <ListGroup.Item key={item.key}>
      <Card className="bg-light border rounded">
        <span key={item.key}
          className="text-right"
          onClick={props.closer.bind(null, item.key)}>{'\u274e'}</span>
          <Card.Body className="text-left">
            <p>{item.FirstName}</p>
            <p>{item.LastName}</p>
            <p>{item.Birthday}</p>
            <p>{item.Telephone}</p>
          </Card.Body>
        </Card>
    </ListGroup.Item>
    )

  return addressBook;
}

export default AllEntries;