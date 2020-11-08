import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

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
    font-weight: 700;
    margin: 0 0 0 0 10px;
  }
  p {
    color: #fff;
    margin: 0;
    line-height: 1.5;
  }

  @media screen and (max-width: 375px) {
    text-align: center;
    margin-bottom: 20px;
    h1 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 1280px) {
    h1 {
      position: relative;
      left: 60%;
    }
  }
`;

const Info = () => {
  let h1Info = useRef(null);
  let pInfo = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.from(h1Info, { opacity: 0, y: 100 });
    if (window.innerWidth > 1280) {
      tl.to(h1Info, { x: "-60%" })
    }
    tl.from(pInfo, { opacity: 0, y: 50 });
  });

  return (
    <InfoFrame>
      <h1 ref={(el) => (h1Info = el)}>Learn to code by watching others</h1>
      <p ref={(el) => (pInfo = el)}>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great,but understanding how developers think is
        invaluable.
      </p>
    </InfoFrame>
  );
};

export default Info;
