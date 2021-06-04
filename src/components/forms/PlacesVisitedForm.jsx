import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Card, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
// import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import { Select, StyledCard, StyledBody } from "./formStyles";

function PlacesVisitedForm() {
  console.log(useFormContext());
  const { register } = useFormContext();
  const { append, fields, remove } = useFieldArray({
    name: "placesVisited",
  });

  return (
    <>
      <StyledCard>
        <Card.Header as="h5">Places Visited</Card.Header>
        <StyledBody>
          {fields.map((item, index) => (
            <Row key={item.id} className="gx-3 mb-3">
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="typeOfPlaces">
                    Select Type of Places
                  </Form.Label>
                  <Select
                    {...register(`placesVisited[${index}].typeOfPlace`)}
                    defaultValue={item.typeOfPlace}
                    placeholder="Select Type of Place"
                    id="typeOfPlaces"
                  >
                    <option value="" disabled hidden>
                      Type Of Place
                    </option>
                    <option value="Beach">Beach</option>
                    <option value="Fort">Fort</option>
                    <option value="Museum">Museum</option>
                    <option value="Park">Park</option>
                    <option value="Temple">Temple</option>
                    <option value="Lake">Lake</option>
                    <option value="Other">Other</option>
                  </Select>
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="nameOfPlace">Name of Place</Form.Label>
                  <Form.Control
                    {...register(`placesVisited[${index}].placeName`)}
                    defaultValue={item.placeName}
                    placeholder="Name of the Place"
                    id="nameOfPlace"
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="nameOfCity">Name of City</Form.Label>
                  <Form.Control
                    {...register(`placesVisited[${index}].cityName`)}
                    defaultValue={item.cityName}
                    placeholder="Name of the city"
                    id="nameOfCity"
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="entryFee">Entry Fee Cost</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>₹</InputGroup.Text>
                    <Form.Control
                      type="number"
                      {...register(`placesVisited[${index}].entryFeeCost`)}
                      defaultValue={item.entryFeeCost}
                      placeholder="Entry Fee"
                      id="entryFee"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="experience">Experience</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="number"
                      {...register(`placesVisited[${index}].rating`)}
                      defaultValue={item.rating}
                      placeholder="Give Rating out of 5"
                      id="experience"
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
                typeOfPlace: "",
                placeName: "",
                cityName: "",
                entryFeeCost: "",
                rating: "",
              })
            }
          >
            Add Places
          </Button>
        </StyledBody>
      </StyledCard>
    </>
  );
}

export default PlacesVisitedForm;
