import React from 'react';
import { useSelector } from 'react-redux';

export default function Page2() {
    const botaoClicado = useSelector(state => state.botaoClicado);
    return (
        <>
            {botaoClicado ? 'CLICADO' : 'NÃO CLICADO'}
        </>
    )
}