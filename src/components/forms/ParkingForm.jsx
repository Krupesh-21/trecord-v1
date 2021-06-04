import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Card, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { PSelect, StyledCard, StyledBody } from "./formStyles";

function ParkingForm() {
  const { register } = useFormContext();
  const { append, fields, remove } = useFieldArray({
    name: "parkingExpense",
  });

  return (
    <>
      <StyledCard>
        <Card.Header as="h5">Parking Expense</Card.Header>
        <StyledBody>
          {fields.map((item, index) => (
            <Row key={item.id} className="gx-3 mb-3">
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="parkingPlace">Parking At</Form.Label>
                  <PSelect
                    {...register(`parkingExpense[${index}].parkingAt`)}
                    defaultValue={item.parkingAt}
                    id="parkingPlace"
                  >
                    <option value="" disabled hidden>
                      Parking...
                    </option>
                    <option value="Beach">Beach</option>
                    <option value="Fort">Fort</option>
                    <option value="Museum">Museum</option>
                    <option value="Park">Park</option>
                    <option value="Temple">Temple</option>
                    <option value="Lake">Lake</option>
                    <option value="Airport">Airport</option>
                    <option value="Other">Other</option>
                  </PSelect>
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="city">City</Form.Label>
                  <Form.Control
                    {...register(`parkingExpense[${index}].cityName`)}
                    defaultValue={item.cityName}
                    placeholder="City Name"
                    id="city"
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="parkingCharge">
                    Parking Charge
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text>₹</InputGroup.Text>
                    <Form.Control
                      type="number"
                      {...register(`parkingExpense[${index}].parkingCharge`)}
                      defaultValue={item.parkingCharge}
                      placeholder="Parking Charge"
                      id="parkingCharge"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="parkingExperience">
                    Parking Service
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="number"
                      {...register(`parkingExpense[${index}].parkingService`)}
                      defaultValue={item.parkingService}
                      placeholder="Give Rating out of 5"
                      id="parkingExperience"
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
                parkingAt: "",
                cityName: "",
                parkingCharge: "",
                parkingService: "",
              })
            }
          >
            Add Parking Expense
          </Button>
        </StyledBody>
      </StyledCard>
    </>
  );
}

export default ParkingForm;
