import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const item = data.filter((dt) => dt.id == id);
 
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item[0]?.img} />
      <Card.Body>
        <Card.Title>{item[0]?.name}</Card.Title>
        <Card.Text>
        {item[0]?.description}
        </Card.Text>
        <p>
          <small>Price : {item[0]?.price}</small>
        </p>
      </Card.Body>
    </Card>
  );
};

export default ServiceDetails;
