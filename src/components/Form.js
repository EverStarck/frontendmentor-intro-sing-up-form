import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import gsap from "gsap";

import Button from "./Button";
import Error from "./Error";
// import Input from './Input';

const FormFrame = styled.section`
  grid-area: form;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  form {
    width: 100%;
  }
  .terms {
    font-size: 0.9rem;
    color: hsl(246, 25%, 77%);
    text-align: center;
    a {
      color: hsl(0, 100%, 74%);
      font-weight: 700;
      text-decoration: none;
    }
  }
  /* MOBILE RESPONSIVE */
  @media screen and (max-width: 768px) {
    margin: 20px 0 20px 0;
  }
`;

const IputStyled = styled.input`
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  font-weight: 600;
  width: 100%;
  box-sizing: border-box;
  color: hsl(249, 10%, 26%);
  border: ${(p) =>
    p.testError ? "2px solid hsl(0, 100%, 74%);" : "1px solid #dedede;"};
  &:focus {
    border: 1px solid hsl(249, 10%, 26%);
  }
`;

const Form = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => console.log(data);

  // const [testError, setTestError] = useState(false);

  // Animation with gsap
  let form = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({ defaults: { duration: .5 } });
    if (window.innerWidth > 1280) {
      tl.from(form, {opacity: 0, y: 200, delay: 3})
    } else {
      tl.from(form, {opacity: 0, y: 200, delay: 2})
    }
  });

  return (
    <FormFrame ref={(el) => (form = el)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <IputStyled
          //  testError={testError}
          ref={register({ required: true, minLength: 1 })}
          name="firstName"
          placeholder="First Name"
          type="text"
        />
        {errors.firstName ? (
          <Error mesage="First Name cannot be empty" />
        ) : null}

        <IputStyled
          //  testError={testError}
          ref={register({ required: true, minLength: 1 })}
          placeholder="Last Name"
          name="lastName"
          type="text"
        />
        {errors.lastName ? <Error mesage="Last Name cannot be empty" /> : null}

        <IputStyled
          //  testError={testError}
          ref={register({
            required: true,
            pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
          })}
          placeholder="Email Address"
          name="email"
          type="text"
        />
        {errors.email && <Error mesage="Looks like this is not an email" />}

        <IputStyled
          //  testError={testError}
          ref={register({ required: true, minLength: 6 })}
          placeholder="Password"
          name="password"
          type="password"
        />
        {errors.password && <Error mesage="Password min 6 characteres" />}

        <Button
          text="CLAIM YOUR FREE TRIAL"
          colorbottom="3px solid rgba(0, 0, 0, .3)"
          colorbg="hsl(154, 59%, 51%)"
        />
      </form>

      <p className="terms">
        By clicking the button, you are agreeing to our{" "}
        <a href="!#" target="_blank" rel="noopener noreferrer">
          Terms and Services
        </a>{" "}
      </p>
    </FormFrame>
  );
};

export default Form;
