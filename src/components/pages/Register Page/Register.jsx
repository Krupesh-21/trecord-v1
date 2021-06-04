import React from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Button, Card, Col, Container, Form, Row, Alert } from "react-bootstrap";
import { RegisterCard } from "./registerPageStyles";


const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null])
});

function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <RegisterCard>
                    <Card.Body>
                        <h3 className="text-center mb-4">Sign Up</h3>
                        <Row>
                            <Col md={12} className="mb-3">
                                <Form.Group>
                                    <Form.Label htmlFor="email">Email:</Form.Label>
                                    <Form.Control {...register("email")} type="email" id="email" placeholder="Enter Your Email Id" />
                                    {errors.email && <Alert className="mt-1" variant="danger">{errors.email?.message}</Alert>}
                                </Form.Group>
                            </Col>
                            <Col md={12} className="mb-3">
                                <Form.Group>
                                    <Form.Label htmlFor="password">Password:</Form.Label>
                                    <Form.Control {...register("password")} type="password" id="password" placeholder="Enter Your Password" />
                                    {errors.password && <Alert className="mt-1" variant="danger">{errors.password?.message}</Alert>}
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label htmlFor="cnfpassword">Confirm Password:</Form.Label>
                                    <Form.Control {...register("confirmPassword")} type="password" id="cnfpassword" placeholder="Enter Your Password Again" />
                                    {errors.confirmPassword && <Alert className="mt-1" variant="danger">{errors.confirmPassword && "Passwords Do Not Match!"}</Alert>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Button type="submit" variant="success" className="w-100 mt-3">Sign Up</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </RegisterCard>
            </form>
        </Container>
    );
}

export default Register;