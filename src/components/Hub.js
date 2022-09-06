import React from 'react';
import styled from 'styled-components';
import Connect from './Connect';

const Hub = () => {
  return (
    <Container>
        <Content>
            <h5>Getting Started</h5>
            <h5>Step 1 of 2 - -</h5>
            <Retangle>
                <Connect />
            </Retangle>
        </Content>
    </Container>
  )
}

export default Hub

const Container =  styled.div `
    padding: 0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
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
