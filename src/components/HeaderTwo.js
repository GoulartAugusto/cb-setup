import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import styled from 'styled-components'
import GetStarted from './GetStarted';

const HeaderTwo = () => {
  return (
    <Container>
      <Heading></Heading>
        <Content>
            <h4>Client Billing <small>–  A full payment solution for your business, free with "COMPANY"</small></h4>
            <h4>Docs&nbsp;<a href='#' style={{ textDecoration: 'none', color: 'black', background: '#F2F2F2'}}><BiLinkExternal /></a></h4>
        </Content>
      <BaseLine></BaseLine>
    </Container>
  )
}

export default HeaderTwo

const Container = styled.div `
    display: grid;
    align-items: center;
    justify-content: center;
    align-self: center;
    background: #F2F2F2;

`

const Heading = styled.div `
    background: #1A1A1A;
    height: 2rem;
    width: 100vw;
`
const Content = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 580px;
    max-width: 1050;
    font-weight: 700;
    font-size: 13px;
    line-height: 30px;
    margin-left: 7rem;
    margin-right: 7rem;
    margin-top: 3rem;
    background: #F2F2F2;
    & small {
        background: #F2F2F2;
        color: #555555;
        font-weight: 500;
    }
    & h4 {
      background: #F2F2F2;
    }
`

const BaseLine = styled.div `
    display: flex;
    margin-left: 7rem;
    width: 1050px;
    height: 1px;
    background: #E6E6E6;
    margin-top: 22px;
`