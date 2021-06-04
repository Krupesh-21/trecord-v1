import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Card, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
// import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShSelect, StyledCard, StyledBody } from "./formStyles";

function ShoppingForm() {
  console.log(useFormContext());
  const { register } = useFormContext();
  const { append, fields, remove } = useFieldArray({
    name: "shopping",
  });

  return (
    <>
      <StyledCard>
        <Card.Header as="h5">Shopping Expense</Card.Header>
        <StyledBody>
          {fields.map((item, index) => (
            <Row key={item.id} className="gx-3 mb-3">
              {/* <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="typeOfShop">
                    Select Type of Places
                  </Form.Label>
                  <ShSelect
                    {...register(`shopping[${index}].typeOfShop`)}
                    defaultValue={item.typeOfShop}
                    placeholder="Select Type of Shop"
                    id="typeOfShop"
                  >
                    <option value="" disabled hidden>
                      Type Of Shop
                    </option>
                    <option value="Stree tVendor">Street Vendor</option>
                    <option value="Shoe Shop">Shoe Shop</option>
                    <option value="Clothes Shop">Clothes Shop</option>
                    <option value="Gift Shop">Gift Shop</option>
                    <option value="Other">Other</option>
                  </ShSelect>
                </Form.Group>
              </Col> */}
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="nameOfShop">Name of Shop</Form.Label>
                  <Form.Control
                    {...register(`shopping[${index}].shopName`)}
                    defaultValue={item.shopName}
                    placeholder="Name of the Shop"
                    id="nameOfShop"
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="nameOfCity">City</Form.Label>
                  <Form.Control
                    {...register(`shopping[${index}].cityName`)}
                    defaultValue={item.cityName}
                    placeholder="Name of the city"
                    id="nameOfCity"
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="purchaseCost">Purchase Cost</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>₹</InputGroup.Text>
                    <Form.Control
                      type="number"
                      {...register(`shopping[${index}].purchaseCost`)}
                      defaultValue={item.purchaseCost}
                      placeholder="Item Cost"
                      id="purchaseCost"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="quantity">No. of Items</Form.Label>
                    <Form.Control
                      type="number"
                      {...register(`shopping[${index}].itemQuantity`)}
                      defaultValue={item.itemQuantity}
                      placeholder="Item Quantity"
                      id="quantity"
                    />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group>
                  <Form.Label htmlFor="experience">Experience</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="number"
                      {...register(`shopping[${index}].rating`)}
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
                typeOfShop: "",
                shopName: "",
                cityName: "",
                purchaseCost: "",
                rating: "",
              })
            }
          >
            Add Shopping Expense
          </Button>
        </StyledBody>
      </StyledCard>
    </>
  );
}

export default ShoppingForm;
