import React from 'react';
import error from '../../images/404/404.png'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div >
          <img  src={error} alt="" />
         <Link to="/home"> <Button  variant="info">Go Home Page</Button></Link>
        </div>
    );
};

export default NotFound;