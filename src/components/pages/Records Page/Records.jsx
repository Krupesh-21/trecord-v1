import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import RecordCard from "./RecordCard";

function Records(props) {
  return (
    <Container fluid style={{ padding: "1.7rem" }}>
      <Row className="gx-1">
        {props.formData.map((user, index) => {
            const id =uuidv4();
            console.log(id)
          return (
            <Col key={index} sm={2} md={3}>
              <RecordCard
                id={id}
                accommodation={user.recordData.accommodation}
                foodAndBeverages={user.recordData.foodAndBeverages}
                from={user.recordData.from}
                parkingExpense={user.recordData.parkingExpense}
                placesVisited={user.recordData.placesVisited}
                shopping={user.recordData.shopping}
                to={user.recordData.to}
                travelBy={user.recordData.travelBy}
              />{" "}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Records;
