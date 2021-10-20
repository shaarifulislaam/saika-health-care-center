import React from 'react';
import { Card, Col ,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './service.css'

const Service = ({service}) => {
    const {id , name , price , img ,description} = service
    return (
        
    <Col>
      <Card className="rounded-4 shadow">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
         <div className="description">
         <Card.Text>
           {description}
          </Card.Text>
         </div>
          <p><small>Price : {price} BDT</small></p>
        </Card.Body>
        <Card.Footer className="border border-0 bg-white">
        <Link to={`/serviceDetails/${id}`}><Button variant="info w-100 "><span><i class="fas fa-info-circle"></i> Details</span></Button></Link>
    </Card.Footer>
      </Card>
    </Col>
   
      
    );
};

export default Service;