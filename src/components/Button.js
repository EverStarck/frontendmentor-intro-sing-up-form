import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

const ButtonFrame = styled.section`
  grid-area: button;

  /* border: 1px solid green; */
  button {
    width: 100%;
    padding: 20px;
    background-color: ${({ colorbg }) => colorbg};
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    /* transition: .5s ease-in-out; */
    box-shadow: ${({ shadow }) => shadow};
    border-bottom: ${({ colorbottom }) => colorbottom};
    &:active {
      transform: translateY(4px);
    }
    &:hover {
      /* transition: .5s ease-in-out; */
      filter: brightness(115%);
    }
    &:not(:hover) {
      transition: 0.5s ease-in-out;
      filter: none;
    }
  }
  .buttonText {
    font-weight: 600;
  }
`;

const Button = ({ text, shadow, colorbottom, colorbg, animation }) => {
  // Animation with gsap
  let button = useRef(null);

  useEffect(() => {
    if (animation) {
      let tl = gsap.timeline({ defaults: { duration: 1 } });
      if (window.innerWidth > 1280) {
        tl.from(button, { opacity: 0, y: -200, delay: 3 });
      } else {
        tl.from(button, { opacity: 0, y: -200, delay: 2 });
      }
    }
  });

  return (
    <ButtonFrame
      text={text}
      shadow={shadow}
      colorbottom={colorbottom}
      colorbg={colorbg}
      ref={(el) => (button = el)}
      animation
    >
      <button type="submit">{text}</button>
    </ButtonFrame>
  );
};

export default Button;
