import React, {useState} from 'react';
import styled from 'styled-components';
import Button from './Button';

import Error from './Error';
import Input from './Input';


const FormFrame = styled.section`
    grid-area: form;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    form {
        width: 100%;
    }
    .terms {
        font-size: .9rem;
        color: hsl(246, 25%, 77%);
        text-align: center;
        a {
            color: hsl(0, 100%, 74%);
            font-weight: 700;
            text-decoration: none;
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
        >
            <form
             onSubmit={handleSubmit}
            >
                <Input
                 error={error}
                 value={firstName}
                 name="firstName"
                 onChange={refreshData}
                 placeholder="First Name"
                 type="text"/>
                {error ? <Error mesage='First Name cannot be empty' /> : null}

                <Input
                error={error}
                 value={lastName}
                 onChange={refreshData}
                 placeholder="Last Name"
                 name="lastName"
                 type="text"/>
                {error ? <Error mesage='Last Name cannot be empty' /> : null}

                <Input
                 error={error}
                 value={email}
                 onChange={refreshData}
                 placeholder="Email Address"
                 name="email"
                 type="text"/>
                {error ?  <Error mesage='Looks like this is not an email' /> : null}

                <Input
                 error={error}
                 value={password}
                 onChange={refreshData}
                 placeholder="Password"
                 name="password"
                 type="password"/>
                {error ?  <Error mesage='Password min 6 characteres' /> : null}

                <Button
                text='CLAIM YOUR FREE TRIAL'
                colorbottom='3px solid rgba(0, 0, 0, .3)'
                colorbg='hsl(154, 59%, 51%)'
                />

            </form>

            <p className="terms">By clicking the button, you are agreeing to our <a href="!#" target="_blank" rel="noopener noreferrer">Terms and Services</a> </p>

        </FormFrame>
    );
}

export default Form;




{/* <input type="text" name="firstName" placeholder="First Name"/>
<input type="text" name="lastName" placeholder="Last Name"/>
<input type="email" name="email" placeholder="Email Address"/>
<input type="password" name="password" placeholder="Password"/> */}

