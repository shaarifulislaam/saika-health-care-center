import React from 'react';
import { Card, Col ,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id , name , price , img} = service
    return (
      
        
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <p>price : {price}</p>
        </Card.Body>
        <Card.Footer className="border border-0 bg-white">
        <Link to={`/serviceDetails/${id}`}><Button variant="success w-100">Details</Button></Link>
    </Card.Footer>
      </Card>
    </Col>
   
      
    );
};

export default Service;