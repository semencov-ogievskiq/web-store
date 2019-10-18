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
import { connect } from 'react-redux';

/**
 * Это компонент Авторизованного пользователя
 */
const User = (props)=>{
    return(
        <Nav.Link href="#home">{props.client.user.login}</Nav.Link>
    )
}

/**
 * Компонент шапки сайта
 */
const Header = (props)=>{
    const client = props.client;
    const user = props.client.user;

    const showModal = ()=>{
        props.dispatch({type:"SHOW_MODAL_AUTH"});
        console.log(props);
    }

    return(
        <Navbar collapseOnSelect fixed="top" expand="md" bg="dark" variant="dark">
            <Navbar.Brand href="/">Web-Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-collapse" />
            <Navbar.Collapse id="navbar-collapse">
                <Container fluid="true">
                    <Row>
                        <Col md={12}>
                            <Nav className="d-inline-block text-bold">
                                {(typeof user == "object")?
                                    <User client={client}/>
                                    :
                                    <Nav.Link href="" onClick={showModal}>Вход/Регистрация</Nav.Link>
                                }                                
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


/**
 * Ограничиваем видимость, наша шапка должна видеть данные только о пользователе 
 */
const mapStateToProps = state=>{ 
    return {client: state.client}
  }

/**
 * Экспортируем компонент через прогонку функции connect
 * чтобы он получил состояние Redux в props
 */
export default connect(
    mapStateToProps,
    null
)(Header);