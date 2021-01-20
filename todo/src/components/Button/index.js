import React from 'react';
import { WrapperButton } from './styles';

const Button = ({ onClick, title, type }) => {
    return <WrapperButton>
        <button onClick={onClick} type={type}>{title}</button>
    </WrapperButton>
}

export default Button;