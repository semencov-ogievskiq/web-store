import React from 'react';
import {
    Navbar,
    Nav,
    Form,
    Button,
    Container,
    Row,
    Col,
    InputGroup
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { IoIosSearch } from 'react-icons/io';


export default class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Navbar collapseOnSelect fixed="top" expand="md" bg="dark" variant="dark">
                <Navbar.Brand href="/">Web-Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-collapse" />
                <Navbar.Collapse id="navbar-collapse">
                    <Container fluid="true">
                        <Row>
                            <Col md={12}>
                                <Nav className="d-inline-block text-bold">
                                    <Nav.Link href="#home">Вход/Регистрация</Nav.Link>
                                </Nav>
                                <Form className="float-right" inline>
                                    <InputGroup>
                                        <Form.Control type="text" placeholder="Search"  />
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend"><IoIosSearch /></InputGroup.Text>
                                        </InputGroup.Prepend>
                                    </InputGroup>
                                </Form>
                            </Col>
                            <Col md={12}>
                                <Nav className="mr-auto">
                                    <Nav.Link href="#home">Главная</Nav.Link>
                                    <Nav.Link href="#features">Товары</Nav.Link>
                                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                                </Nav>
                            </Col> 
                        </Row>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}