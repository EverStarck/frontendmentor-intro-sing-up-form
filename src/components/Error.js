import React from 'react';
import styled from 'styled-components';

import errorIcon from '../assets/images/icon-error.svg';

const Img = styled.img`

    position: absolute;
    right: 11%;
    transform: translateY(60%);
    /* Mobile responsive */
    @media screen and (max-width: 623px) {
        right: 15%;
    }
`;

const P = styled.p`
    position: relative;
    top: -20px;
    color: hsl(0, 100%, 74%);
    text-align: end;
    font-size: 11px;
`;

const Error = ({mesage}) => {
    return (
        <>
            <Img src={errorIcon} alt="Icon of red error" srcSet="" />
            <P>{mesage}</P>
        </>
    );
}

export default Error;