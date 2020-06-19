import React, {useState} from 'react';
import styled from 'styled-components';
import Button from './Button';

// import errorIcon from '../assets/images/icon-error.svg';
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
            /* img {
                position: absolute;
                right: 11%;
                transform: translateY(60%);
                display: none;
                /* transform: translate(60%); */
                /* width: 25px; */
                /* height: 25px; }*/

            input {
                padding: 15px;
                margin-bottom: 20px;
                border-radius: 10px;
                font-weight: 600;
                width: 100%;
                box-sizing: border-box;
                color: hsl(249, 10%, 26%);

                border: ${p => p.error ? '2px solid hsl(0, 100%, 74%);' : '1px solid #dedede;'};

                &:focus {
                    border: 1px solid hsl(249, 10%, 26%);
                }
            }
        }
    }
`;

const Form = () => {
    // State of all inputs
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',

    });

    const [error, setError] = useState(false);

    // Get all inputs
    const {firstName, lastName, email, password} = data;

    // Refresh form
    const refreshData = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    // On submit
    const handleSubmit = e => {
        e.preventDefault();

        // Verify
        // No empty filds
        if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || password.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        // Verify email
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(!emailRegex.test(email)) {
            setError(true);
            return;
        }
        setError(false);

        // Passowrd min 6 lengh
        if(password.length < 6) {
            setError(true);
            return;
        }
        setError(false);
        alert('hola')
    }

    return (
        <FormFrame
        error={error}
        >
            <form
             onSubmit={handleSubmit}
            >
                <div className="input-container">
                    <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={refreshData}/>
                    {/* <img src={errorIcon} alt="Icon of red error" srcSet="" /> */}
                </div>

                {error ? <Error mesage='First Name cannot be empty' /> : null}

                <div className="input-container">
                    <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={refreshData} />
                    {/* <img src={errorIcon} alt="Icon of red error" srcSet="" /> */}
                </div>

                {error ? <Error mesage='Last Name cannot be empty' /> : null}

                <div className="input-container">
                    <input type="text" name="email" placeholder="Email Address" value={email} onChange={refreshData}/>
                    {/* <img src={errorIcon} alt="Icon of red error" srcSet="" /> */}
                </div>

                {error ?  <Error mesage='Looks like this is not an email' /> : null}

                <div className="input-container">
                    <input type="password" name="password" placeholder="Password" value={password} onChange={refreshData}/>
                    {/* <img src={errorIcon} alt="Icon of red error" srcSet="" /> */}
                </div>

                {error ?  <Error mesage='Password min 6 characteres' /> : null}

                <Button
                text='CLAIM YOUR FREE TRIAL'
                colorbottom='3px solid rgba(0, 0, 0, .3)'
                colorbg='hsl(154, 59%, 51%)'
                />

            </form>
        </FormFrame>
    );
}

export default Form;




{/* <input type="text" name="firstName" placeholder="First Name"/>
<input type="text" name="lastName" placeholder="Last Name"/>
<input type="email" name="email" placeholder="Email Address"/>
<input type="password" name="password" placeholder="Password"/> */}

