import React from 'react';
import styled from 'styled-components';
import Connect from './Connect';
import { BsDot, BsCheckLg } from 'react-icons/bs';
import Billing from './Billing';

const HubCopy = () => {
  return (
    <Container>
        <Content>
            <h5>Getting Started</h5>
            <h5>Step 2 of 2 <BsDot style={{ background: 'transparent', fontSize: '18px', color: '#AAAAAA'  }} /> <BsDot style={{ background: 'transparent', fontSize: '18px'}} /></h5>
            <Retangle>
                <Billing />
            </Retangle>
        </Content>
        <Successfully>
            <BsCheckLg style={{ color: "#18BB4B", height: "30px", width: "30px", marginRight: "13px", background: "#E6E6E6" }}/>
            <h3>Stripe account connected successfully!<p>A SECOND AGO</p></h3>
        </Successfully>
    </Container>
  )
}

export default HubCopy

const Container =  styled.div `
    padding: 0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    background: #F2F2F2;
`

const Content = styled.div `
    background: #ffff;
    width: 1050px;
    min-height: 676px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & h5 {
            background: #ffff;
            margin-left: 2rem;
            margin-top: 2rem;
            align-self: flex-start;
            position: absolute;
            margin-bottom: 2rem;
        }
    & h5:nth-child(2) {
        align-self: flex-end;
        margin-right: 2rem;
        position: relative;
        margin-bottom: 2rem;
        display: flex;
    }
`


const Retangle = styled.div `
    background: #F9F9F9;
    width: 990px;
    height: 556px;
    margin-bottom: auto;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Successfully = styled.div `
    background: #E6E6E6;
    width: 300px;
    height: 80px;
    border-radius: 4px;
    position: absolute;
    left: 30px;
    top: 782px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 13px;
    & h3 {
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        width: 215px;
        height: 57px;
        background: #E6E6E6;
    }
    & p {
        font-size: 9px;
        background: #E6E6E6;
    }
`
