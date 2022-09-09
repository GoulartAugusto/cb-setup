import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import styled from 'styled-components'

const Header = () => {
  return (
    <>
      <Heading></Heading>
      <Container>
          <Content>
              <h4>Client Billing</h4>
              <h4>Docs&nbsp;<a href='#' style={{ textDecoration: 'none', color: 'black', background: '#F2F2F2'}}><BiLinkExternal /></a></h4>
          </Content>
      </Container>
    </>
  )
}

export default Header

const Heading = styled.div `
    background: #1A1A1A;
    height: 2rem;
    width: 100vw;
`

const Container = styled.div `
    display: grid;
    align-items: center;
    justify-content: center;
    align-self: center;
    background: #F2F2F2;
    width: 100vw;
`


const Content = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 920px;
    max-width: 1050;
    height: 30px;
    font-weight: 700;
    font-size: 13px;
    line-height: 30px;
    margin-bottom: 35px;
    margin-right: 2rem;
    margin-left: 3rem;
    margin-top: 3rem;
    background-color: #F2F2F2;
    & h4, a {
    background-color: #F2F2F2;
  }
    @media screen and ( max-width: 1050px ) {
      justify-content: space-between;
      gap: calc(500px - 30vw);
    }
`