import React from 'react';
import styled from 'styled-components';

const IputStyled = styled.input`
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 10px;
    font-weight: 600;
    width: 100%;
    box-sizing: border-box;
    color: hsl(249, 10%, 26%);
    border: ${p => p.error ? '2px solid hsl(0, 100%, 74%);' : '1px solid #dedede;'};
    &:focus {
        border: 1px solid hsl(249, 10%, 26%);
    }
`;

const Input = ({type,placeholder, name, value, onChange, error}) => {
    return (
        <IputStyled type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} error={error}/>
    );
}

export default Input;