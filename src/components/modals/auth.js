import React from 'react';
import {
    Button,
    Modal,
    Form
} from 'react-bootstrap';
import { connect } from 'react-redux';

/**
 * Модальное окно авторизации пользователя.
 */
const Auth = (props)=>{
    console.log(props)
    const modalClose = ()=>props.dispatch({type:'AUTH_CLOSE'})
    return(
        <Modal show={props.show} onHide={modalClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Авторизация</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Почта" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Пароль" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Запомнить меня" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Войти
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}
/**
 * Даем доступ к состоянию авторизации.
 */
const mapStateToProps = state=>{ 
    return  state.auth
  }

/**
 * Экспортируем компонент через прогонку функции connect
 * чтобы он получил состояние Redux в props
 */
export default connect(
    mapStateToProps,
    null//
)(Auth);