import React from 'react';
import { Card, Col , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = ({doctor}) => {
    const {id, name , img , degree , visit , specialist} = doctor;
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
             {degree}
            </Card.Text>
            <Card.Text>
             {specialist}
            </Card.Text>
            <p><small>Visit : {visit} BDT</small></p>
          </Card.Body>
          <Card.Footer className="border border-0 bg-white">
          <Link to={`/doctorDetails/${id}`}><Button variant="primary w-100"><span><i class="fas fa-calendar-check"></i> Appointment</span></Button></Link>
      </Card.Footer>
        </Card>
      </Col>
    );
};

export default Doctor;