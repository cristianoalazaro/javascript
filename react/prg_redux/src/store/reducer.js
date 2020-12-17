import {types} from './type';

const initialState = {
    botaoClicado : false,
}

export default function (state=initialState, action){
    if (action.type === types.BOTAO_CLICADO){
        const newState = {...state};
        newState.botaoClicado = !newState.botaoClicado;
        return newState;
    }
    return state;
}