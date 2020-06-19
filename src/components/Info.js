import React from 'react';
import styled from 'styled-components';

const InfoFrame = styled.section`
    grid-area: info;

    /* border: 5px solid purple; */
    width: 95%;

    /* Center text vertical */
    display: flex;
    flex-direction: column;
    align-self: center;

    h1 {
        color: #fff;
        /* text-align: center; */
        font-size: 3rem;
        margin: 0 0 0 0 10px;

    }
    p {
        color: #fff;
        margin: 0;
        line-height: 1.5;
    }
`;

const Info = () => {
    return (
        <InfoFrame>
            <h1>Learn to code by <br/> watching others</h1>
            <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great,but understanding how developers think is invaluable.</p>
        </InfoFrame>
    );
}

export default Info;