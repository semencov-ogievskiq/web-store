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
        props.dispatch({type:"SHOW_MODAL_AUTH"});
        console.log(props);
    }

    return(
        <main>
             
        </main>
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