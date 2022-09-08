import React from 'react';
import styled from 'styled-components';
import { BiLinkExternal } from 'react-icons/bi';
import Stripe from "../images/stripe.jpg";
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <Content>
        <img src={Stripe} alt="stripe" style={{ width:"150px", height: "150px", borderRadius: "50%" }} />
        <h1>Connect Stripe Account</h1>
                <p>Client Billing requires a free Stripe account. Connect your existing account or create a new one.</p>
            <form>
                <h5>Transaction Fee</h5>
                <h5>5%</h5>
            </form>
        <Link to="/billing"><Start>Get Started</Start></Link>
        <a href="#">Find out more about Client Billing &nbsp;<BiLinkExternal /></a>
    </Content>
  )
}

// After click or not in upgrade that will 'display: none' when clicked
// Make the button "Start" advance for the next page

export default GetStarted

const Content = styled.main `
    display: flex;
    flex-direction: column;
    background: transparent;
    align-items: center;
    & form {
        background: #ffffff;
        width: 400px;
        height: 60px;
        margin-bottom: 30px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    & img {
        margin-bottom: 30px;
    }
    & h1 {
        background: transparent;
        margin-bottom: 30px;
    }
    & p {
        background: transparent;
        max-width: 520px;
        text-align: center;
        margin-bottom: 20px;
        line-height: 30px;
        letter-spacing: 0.26px;
        font-size: 15px;
    }
    & a {
        color: #286EF1;
        text-decoration: none;
        background: transparent;
        margin-top: 20px;
        display: flex;
        align-items: center;
    }
    & button:hover {
        cursor: pointer;
    }
`

const Start = styled.button `
    width: 200px;
    height: 40px;
    background: #286EF1;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    font-weight: 500;
`