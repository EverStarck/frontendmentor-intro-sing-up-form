import React from 'react';
import styled from 'styled-components';

const ButtonFrame = styled.section`
    grid-area: button;

    /* border: 1px solid green; */
    button {
        width: 100%;
        padding: 20px;
        background-color: ${({colorbg}) => colorbg};
        border: none;
        border-radius: 10px;
        color: #fff;
        cursor: pointer;
        box-shadow: ${({shadow}) => shadow};
        border-bottom: ${({colorbottom}) => colorbottom};
        &:active {
            transform: translateY(4px);
        }
    }
    .buttonText {
        font-weight: 600;
    }
`;

const Button = ({text, shadow, colorbottom, colorbg}) => {
    return (
        <ButtonFrame
         text={text}
         shadow={shadow}
         colorbottom={colorbottom}
         colorbg={colorbg}
        >
            <button
             type="submit"
            >{text}</button>
        </ButtonFrame>
    );
}

export default Button;