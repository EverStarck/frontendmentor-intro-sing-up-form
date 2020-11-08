import React from "react";
import styled from "styled-components";
import Info from "./components/Info";
import Button from "./components/Button";
import Form from "./components/Form";

import backgroundDesktop from "./assets/images/bg-intro-desktop.png";
import backgroundMobile from "./assets/images/bg-intro-mobile.png";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
  font-size: 16px;

  @media screen and (min-width: 768px) {
    max-height: 100vh;
    min-height: 100vh;
    max-width: 100vw;
    min-width: 100vw;
  }

  /* Size */
  /* max-height: 100vh;
  min-height: 100vh;
  max-width: 100vw;
  min-width: 100vw; */

  /* Align */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Background */
  background-image: url(${backgroundDesktop});
  background-color: hsl(0, 100%, 74%);
`;

const Grid = styled.main`
  width: 85%;

  /* Grid */
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto auto;
  grid-template-areas:
    "blank button"
    "info form";

  /* Tablet RESPONSIVE */
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto auto auto;
    grid-template-areas:
      "info"
      "button"
      "form";
  }

  /* MOBILE RESPONSIVE */
  @media screen and (max-width: 375px) {
    /* Background */
    background-image: url(${backgroundMobile});
    background-color: hsl(0, 100%, 74%);
  }
`;

function App() {
  return (
    <Container>
      <Grid>
        <Info />

        <Button
          text={[
            <span className="buttonText">Try it free 7 days</span>,
            " then $20/mo. thereafter",
          ]}
          shadow="0px 10px 0px 0px rgba(62, 60, 73,.3)"
          colorbg="hsl(248, 32%, 49%)"
          animation={true}
        />

        <Form />
      </Grid>
    </Container>
  );
}

export default App;
