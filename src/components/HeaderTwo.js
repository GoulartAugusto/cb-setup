import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import styled from 'styled-components'
import GetStarted from './GetStarted';

const HeaderTwo = () => {
  return (
    <Container>
    <Heading>Header</Heading>
      <Content>
          <h4>Client Billing <small>–  A full payment solution for your business, free with "COMPANY"</small></h4>
          <h4>Docs&nbsp;<a href='#' style={{ textDecoration: 'none', color: 'black'}}><BiLinkExternal /></a></h4>
      </Content>
    </Container>
  )
}

export default HeaderTwo

const Container = styled.div `
    display: grid;
    align-items: center;
    justify-content: center;
    align-self: center;

`

const Heading = styled.div `
    background: #1A1A1A;
    height: 2rem;
    width: calc(100vw - 20px);
`
const Content = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 7rem;
    margin-right: 7rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    & small {
        background: transparent;
        color: #555555;
        font-weight: 500;
    }
`

// In "COMPANY" input the same result of what was typed on EMAIL