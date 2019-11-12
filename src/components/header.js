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
        <Nav.Link href="#home">{props.client.client.login}</Nav.Link>
    )
}

/**
 * Компонент шапки сайта
 */
const Header = (props)=>{
    const client = props.client;
    const user = props.client.user;

    const showModal = ()=>{
        props.dispatch({type:"AUTH_SHOW"});
        console.log(props);
    }

    return(
        <Navbar collapseOnSelect fixed="top" expand="md" bg="light" variant="light">
            <LinkContainer to="/">
                <Navbar.Brand>Web-Store</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="navbar-collapse" />
            <Navbar.Collapse id="navbar-collapse">
                <Nav className="mr-auto">
                    <LinkContainer to="/catalog">
                        <Nav.Link>Каталог</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/dostavka">
                        <Nav.Link>Доставка</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/oNas">
                        <Nav.Link>О нас</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav className="d-inline-block text-bold">
                    {(typeof user == "object")?
                        <User client={client}/>
                        :
                        <Nav.Link href="" onClick={showModal}>Вход/Регистрация</Nav.Link>
                    }                                
                </Nav>
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