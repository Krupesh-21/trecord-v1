import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Card, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ASelect, StyledCard, StyledBody } from "./formStyles";

function AccommodationForm() {
  const { register } = useFormContext();
  const { append, fields, remove } = useFieldArray({
    name: "accommodation",
  });

  return (
    <>
      <StyledCard>
        <Card.Header as="h5">Accommodation</Card.Header>
        <StyledBody>
          {fields.map((item, index) => (
            <Row key={item.id} className="gx-2 mb-3">
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="typeOfAccommodation">
                    Type of Accommodation
                  </Form.Label>
                  <ASelect
                    {...register(`accommodation[${index}].typeOfAccommodation`)}
                    defaultValue={item.typeOfAccommodation}
                    id="typeOfAccommodation"
                  >
                    <option value="" disabled hidden>
                      Accommodation Type
                    </option>
                    <option value="hotel">Hotel</option>
                    <option value="resort">Resort</option>
                    <option value="motel">Motel</option>
                    <option value="guestHouse">Guest House</option>
                    <option value="homeStay">Home Stay</option>
                    <option value="campingTents">Camping Tents</option>
                    <option value="dharmShala">Dharm Shala</option>
                  </ASelect>
                </Form.Group>
              </Col>

              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="typeOfRoom">
                    Select Type of Room
                  </Form.Label>
                  <ASelect
                    {...register(`accommodation[${index}].typeOfRoom`)}
                    defaultValue={item.typeOfRoom}
                    id="typeOfRoom"
                  >
                    <option value="" disabled hidden>
                      Room Type
                    </option>
                    <option value="A.C.">A.C.</option>
                    <option value="Non A.C.">Non A.C.</option>
                    <option value="A.C. Delux">A.C. Delux</option>
                    <option value="Non A.C. Delux">Non A.C. Delux</option>
                    <option value="Hall">Hall</option>
                    <option value="Other">Other</option>
                  </ASelect>
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="nameofAccommodation">
                    Name of Accommodation
                  </Form.Label>
                  <Form.Control
                    {...register(`accommodation[${index}].nameOfAccommodation`)}
                    defaultValue={item.nameOfAccommodation}
                    placeholder="Name Of Accommodation Facility"
                    id="nameofAccommodation"
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="city">City</Form.Label>
                  <Form.Control
                    {...register(`accommodation[${index}].accommodationCity`)}
                    defaultValue={item.accommodationCity}
                    placeholder="City"
                    id="city"
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="roomCost">Room Cost</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>₹</InputGroup.Text>
                    <Form.Control
                      type="number"
                      {...register(`accommodation[${index}].roomCost`)}
                      defaultValue={item.roomCost}
                      placeholder="Rent"
                      id="roomCOst"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={1}>
                <Form.Group>
                  <Form.Label htmlFor="accommodationExperience">
                    Experience
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="number"
                      {...register(
                        `accommodation[${index}].accommodationExperience`
                      )}
                      defaultValue={item.accommodationExperience}
                      placeholder="Rate"
                      id="accommodationExperience"
                    />
                    <InputGroup.Text>/5</InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={1}>
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
                typeOfAccommodation: "",
                typeOfRoom: "",
                nameOfAccommodation: "",
                accommodationCity: "",
                roomCost: "",
                accommodationExperience: "",
              })
            }
          >
            Add Accommodation
          </Button>
        </StyledBody>
      </StyledCard>
    </>
  );
}

export default AccommodationForm;
