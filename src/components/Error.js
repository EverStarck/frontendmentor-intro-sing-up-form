import React from 'react';
import styled from 'styled-components';

const P = styled.p`
    position: relative;
    top: -20px;
    color: hsl(0, 100%, 74%);
    text-align: end;
    font-size: 11px;
`;

const Error = ({mesage}) => {
    return (
        <P>{mesage}</P>
    );
}

export default Error;