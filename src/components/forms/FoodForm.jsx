import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Card, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FSelect, StyledCard, StyledBody } from "./formStyles";

function FoodForm() {
  const { register } = useFormContext();
  const { append, fields, remove } = useFieldArray({
    name: "foodAndBeverages",
  });

  return (
    <>
      <StyledCard>
        <Card.Header as="h5">Food & Beverages Expense</Card.Header>
        <StyledBody>
          {fields.map((item, index) => (
            <Row key={item.id} className="gx-3 mb-3">
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="typeOfEatingPlace">
                    Type of Eating Place
                  </Form.Label>
                  <FSelect
                    {...register(
                      `foodAndBeverages[${index}].typeOfEatingPlace`
                    )}
                    defaultValue={item.typeOfEatingPlace}
                    id="typeOfEatingPlace"
                  >
                    <option value="" disabled hidden>
                      Select A Category..
                    </option>
                    <option value="Fine Dining">Fine Dining</option>
                    <option value="Family Restaurant">Family Restaurant</option>
                    <option value="Street Food">Street Food</option>
                    <option value="Food Court">Food Court</option>
                    <option value="Mandir Prasadam">Mandir Prasadam</option>
                    <option value="Other">Other</option>
                  </FSelect>
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="nameOfEatingPlace">
                    Name of PLace
                  </Form.Label>
                  <Form.Control
                    {...register(
                      `foodAndBeverages[${index}].nameOfEatingPlace`
                    )}
                    defaultValue={item.nameOfEatingPlace}
                    placeholder="Name of Eating Place"
                    id="nameOfEatingPlace"
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="foodEatingPlaceCityName">
                    City
                  </Form.Label>
                  <Form.Control
                    {...register(
                      `foodAndBeverages[${index}].foodEatingPlaceCityName`
                    )}
                    defaultValue={item.foodEatingPlaceCityName}
                    placeholder="City Name"
                    id="foodEatingPlaceCityName"
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="foodCost">Food Cost</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>₹</InputGroup.Text>
                    <Form.Control
                      type="number"
                      {...register(`foodAndBeverages[${index}].foodCost`)}
                      defaultValue={item.foodCost}
                      placeholder="Food Cost..."
                      id="foodCost"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="foodExperience">Rating</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="number"
                      {...register(`foodAndBeverages[${index}].foodRating`)}
                      defaultValue={item.foodRating}
                      placeholder="Give Rating out of 5"
                      id="foodExperience"
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
                typeOfEatingPlace: "",
                nameOfEatingPlace: "",
                foodEatingPlaceCityName: "",
                foodCost: "",
                foodRating: "",
              })
            }
          >
            Add Food Expense
          </Button>
        </StyledBody>
      </StyledCard>
    </>
  );
}

export default FoodForm;
