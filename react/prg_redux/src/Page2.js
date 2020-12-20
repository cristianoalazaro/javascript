import React from 'react';

import { useSelector } from 'react-redux';

export default function Page2() {
    const botaoClicado = useSelector(state => state.example.botaoClicado);

    return (
        <>
            {botaoClicado ? 'O botão está clicado' : 'O botão não está clicado'}
        </>
    )
}