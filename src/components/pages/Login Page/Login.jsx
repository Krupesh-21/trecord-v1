import React from "react";
// import {Link} from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button, Card, Col, Container, Form, Row,  Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { LoginCard } from "./loginPageStyles";


const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required()
});


function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => console.log(data);

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <LoginCard>
                    <Card.Body>
                        <h3 className="text-center mb-4">Log In</h3>
                        <Row>
                            <Col md={12} className="mb-3">
                                <Form.Group>
                                    <Form.Label htmlFor="email">Email:</Form.Label>
                                    <Form.Control {...register("email")} type="email" id="email" placeholder="Enter Your Email Id" />
                                    {errors.email && <Alert className="mt-1" variant="danger">{errors.email?.message}</Alert>}
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label htmlFor="password">Password:</Form.Label>
                                    <Form.Control {...register("password")} type="password" id="password" placeholder="Enter Your Password" />
                                    {errors.password && <Alert className="mt-1" variant="danger">{errors.password?.message}</Alert>}
                                </Form.Group>
                            </Col>
                            <Col>
                                <Button type="submit" variant="primary" className="w-100 mt-3">Log In</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </LoginCard>
                {/* <div className="w-100 text-center mt-2">
                    Need an Account? <Link to="/register">Sign Up</Link>
                </div> */}
            </form>
        </Container>
    );
}

export default Login;