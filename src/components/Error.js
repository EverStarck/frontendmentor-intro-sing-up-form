import React from 'react';
import styled from 'styled-components';

import errorIcon from '../assets/images/icon-error.svg';

const Img = styled.img`

    position: absolute;
    right: 11%;
    transform: translateY(-250%);
    /* display: none; */
    /* transform: translate(60%); */
    /* width: 25px; */
    /* height: 25px; */
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