import React, { useState } from "react";
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm, FormProvider } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import PlacesVisitedForm from "./PlacesVisitedForm";
import TravelByForm from "./TravelByForm";
import AccommodationForm from "./AccommodationForm";
import FoodForm from "./FoodForm";
import ShoppingForm from "./ShoppingForm";
import ParkingForm from "./ParkingForm";
import { StyledBody, StyledCard } from "./formStyles";

function FormPage(props) {

  console.log("props", props.formData);

  const methods = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    props.recordDataHandler(data);
    methods.reset();
  };


  return (
    <FormProvider {...methods}>
      <Container fluid style={{ padding: "20px" }}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <StyledCard>
            <Card.Header>Journey</Card.Header>
            <StyledBody>
              <Row className="gx-4 mb-1">
                <Col md={4} className="mb-2">
                  <Form.Group>
                    <Form.Label htmlFor="journeyFrom">From</Form.Label>
                    <Form.Control
                      {...methods.register("from")}
                      placeholder="from"
                      id="journeyFrom"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label htmlFor="journeyTo">To</Form.Label>
                    <Form.Control
                      {...methods.register("to")}
                      placeholder="to"
                      id="journeyTo"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </StyledBody>
          </StyledCard>
          <TravelByForm />
          <PlacesVisitedForm />
          <AccommodationForm />
          <FoodForm />
          <ShoppingForm />
          <ParkingForm />
          <Button type="submit" variant="primary">
            Save Record
          </Button>
        </form>
      </Container>
    </FormProvider>
  );
}

export default FormPage;
