import React from 'react';
import {
    Button,
    Modal
} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { IoIosSearch } from 'react-icons/io';
import { connect } from 'react-redux';
import Auth from './modals/auth'

const Modals = (props)=>{
    console.log(props)
    return(
        <div>
            <Auth/>
        </div>
    )
}

/**
 * Экспортируем компонент через прогонку функции connect
 * чтобы он получил состояние Redux в props
 */
export default Modals;