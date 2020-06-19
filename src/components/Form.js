import React from 'react';
import styled from 'styled-components';
import Button from './Button';

import errorIcon from '../assets/images/icon-error.svg';
import Error from './Error';


const FormFrame = styled.section`
    grid-area: form;
    background: #fff;
    padding: 20px;
    border-radius: 10px;

    form {
        width: 100%;
        .input-container {
            display: -ms-flexbox; /* IE10 */
            display: flex;
            img {
                position: absolute;
                right: 11%;
                transform: translateY(60%);
                /* transform: translate(60%); */
                /* width: 25px; */
                /* height: 25px; */
            }
            input {
                padding: 15px;
                margin-bottom: 20px;
                border: 1px solid #dedede;
                border-radius: 10px;
                font-weight: 600;
                width: 100%;
                box-sizing: border-box;
                &:focus {
                    border: 1px solid #605b79;
                }
            }
        }
    }
`;

const Form = () => {
    return (
        <FormFrame>
            <form>
            <div class="input-container">
                <input type="text" name="firstName" placeholder="First Name"/>
                <img src={errorIcon} alt="Icon of red error" srcSet=""/>
            </div>
            <Error mesage='First Name cannot be empty'/>
            <div class="input-container">
                <input type="text" name="lastName" placeholder="Last Name"/>
                <img src={errorIcon} alt="Icon of red error" srcSet=""/>
            </div>
            <div class="input-container">
            <input type="email" name="email" placeholder="Email Address"/>
                <img src={errorIcon} alt="Icon of red error" srcSet=""/>
            </div>
            <div class="input-container">
            <input type="password" name="password" placeholder="Password"/>
                <img src={errorIcon} alt="Icon of red error" srcSet=""/>
            </div>


                {/* <input type="text" name="firstName" placeholder="First Name"/>
                <input type="text" name="lastName" placeholder="Last Name"/>
                <input type="email" name="email" placeholder="Email Address"/>
                <input type="password" name="password" placeholder="Password"/> */}


            </form>

            <Button/>

        </FormFrame>
    );
}

export default Form;