import React from 'react';
import styled from 'styled-components';
import { AiFillCheckCircle } from 'react-icons/ai';
import Stripe from "../images/stripe.jpg";

const Connect = () => {
  return (
    <Content>
        <img src={Stripe} alt="stripe" style={{ width:"150px", height: "150px", borderRadius: "50%" }} />
        <h1>Connect Stripe Account</h1>
            <form>
                <h5>name Stripe Account
                    <br />
                    <input type='email' placeholder='email' />
                </h5>
                <h5>Connected &nbsp;<AiFillCheckCircle style={{ color: '#18BB4B' }} /></h5>
            </form>
        <Continue>Continue</Continue>
    </Content>
  )
}

export default Connect

const Content = styled.main `
    display: flex;
    flex-direction: column;
    background: transparent;
    align-items: center;
    & form {
        background: #ffffff;
        width: 500px;
        height: 80px;
        margin-bottom: 30px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    & input {
        border: none;
        width: 313px;
        height: 20px;
        background: transparent;
    }
    & img {
        margin-bottom: 30px;
    }
    & h1 {
        background: transparent;
        margin-bottom: 30px;
    }
    & h5 {
        background: transparent;
    }

`

const Continue = styled.button `
    width: 150px;
    height: 40px;
    background: #286EF1;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    font-weight: 500;
`