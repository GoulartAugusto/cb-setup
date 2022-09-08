import React from 'react';
import styled from 'styled-components';
import Connect from './Connect';
import { BsDot } from 'react-icons/bs'

const Hub = () => {
  return (
    <Container>
        <Content>
            <h5>Getting Started</h5>
            <h5>Step 1 of 2 <BsDot style={{ background: 'transparent', fontSize: '18px' }} /> <BsDot style={{ background: 'transparent', fontSize: '18px', color: '#AAAAAA' }} /></h5>
            <Retangle>
                <Connect />
            </Retangle>
        </Content>
    </Container>
  )
}

export default Hub

const Container =  styled.div `
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    @media screen and ( max-width: 1050px ) {
        width: 100%;
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
    @media screen and ( max-width: 1050px ) {
        width: 100%;
      }
`
