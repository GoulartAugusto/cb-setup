import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import styled from 'styled-components'

const Header = () => {
  return (
    <>
    <Heading>Header</Heading>
    <Content>
        <h4>Client Billing</h4>
        <h4>Docs&nbsp;<a href='#' style={{ textDecoration: 'none', color: 'black'}}><BiLinkExternal /></a></h4>
    </Content>
    </>
  )
}

export default Header

const Heading = styled.div `
    background: #1A1A1A;
    height: 2rem;
`
const Content = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 7rem;
    margin-right: 7rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
`
