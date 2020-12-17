import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import  { Container } from '../../styles/GlobalStyles'
import {Title, Paragraph} from './styled';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
    const dispatch = useDispatch();

    const handleClick = (event)=>{
        event.preventDefault();
        dispatch(exampleActions.clicaBotaoRequest());
    }

    return (
        <Container>
            <Title>Login<small>Oii</small></Title>
            <Paragraph>Lorem ipsum dfdsfd</Paragraph>
            <button type='button' onClick={handleClick} >Enviar</button>
        </ Container>
    )
}