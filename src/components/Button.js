import React from 'react';
import styled from 'styled-components';

const ButtonFrame = styled.section`
    grid-area: button;

    /* border: 1px solid green; */
    button {
        width: 100%;
        padding: 20px;
        background-color: hsl(228, 45%, 44%);
        border: none;
        border-radius: 10px;
        color: #fff;

    }
`;

const Button = () => {
    return (
        <ButtonFrame>
            <button type="submit">Try it free 7 days then $20/mo. thereafter</button>
        </ButtonFrame>
    );
}

export default Button;