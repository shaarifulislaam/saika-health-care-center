import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services , setServices] = useState([]);
    useEffect(()=>{
fetch('/services.json')
.then(res => res.json())
.then(data => setServices(data))
    },[])
    return (
        <div id="services">
         <h1 className="text-center text-info my-3">Our Services </h1>
           <Row xs={1} md={2} xl={3} className="g-3 container-lg  mx-lg-auto mx-md-auto mx-0">
           {
               services.map(service => <Service
               key={service.id}
               service={service}
               ></Service>)
           }
          
        </Row>
        </div>
    );
};

export default Services;