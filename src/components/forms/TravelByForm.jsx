import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Card, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TSelect, StyledCard, StyledBody } from "./formStyles";

function TravelByForm() {
  const { register } = useFormContext();
  const { append, fields, remove } = useFieldArray({
    name: "travelBy",
  });

  return (
    <>
      <StyledCard>
        <Card.Header as="h5">Travel By</Card.Header>
        <StyledBody>
          {fields.map((item, index) => (
            <Row key={item.id} className="gx-3 mb-3">
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="typeOfRide">
                    Select Type of Ride
                  </Form.Label>
                  <TSelect
                    {...register(`travelBy[${index}].typeOfRide`)}
                    defaultValue={item.typeOfRide}
                    id="typeOfRide"
                  >
                    <option value="" disabled hidden>
                      Travel by...
                    </option>
                    <option value="Air">Air</option>
                    <option value="Train">Train</option>
                    <option value="Taxi">Taxi</option>
                    <option value="Car">Car</option>
                    <option value="Bicycle">Bicycle</option>
                    <option value="Autorikshaw">AutoRikshaw</option>
                    <option value="Other">Other</option>
                  </TSelect>
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="from">From</Form.Label>
                  <Form.Control
                    {...register(`travelBy[${index}].from`)}
                    defaultValue={item.from}
                    placeholder="From"
                    id="from"
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="to">To</Form.Label>
                  <Form.Control
                    {...register(`travelBy[${index}].to`)}
                    defaultValue={item.to}
                    placeholder="to"
                    id="to"
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="rideCost">Ride Cost</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>₹</InputGroup.Text>
                    <Form.Control
                      type="number"
                      {...register(`travelBy[${index}].rideCost`)}
                      defaultValue={item.rideCost}
                      placeholder="Ride Cost..."
                      id="rideCost"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="rideExperience">
                    Ride Experience
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="number"
                      {...register(`travelBy[${index}].rideRating`)}
                      defaultValue={item.rideRating}
                      placeholder="Give Rating out of 5"
                      id="rideExperience"
                    />
                    <InputGroup.Text>/5</InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={2}>
                <Button
                  variant="danger"
                  onClick={() => remove(index)}
                  style={{ marginTop: "2rem", height: "37px" }}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
          <Button
            variant="dark"
            onClick={() =>
              append({
                typeOfRide: "",
                from: "",
                to: "",
                rideCost: "",
                rideRating: "",
              })
            }
          >
            Add Ride
          </Button>
        </StyledBody>
      </StyledCard>
    </>
  );
}

export default TravelByForm;
