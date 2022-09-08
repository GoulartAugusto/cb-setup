import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import styled from 'styled-components';
import { HiUserGroup } from 'react-icons/hi';
import { ImBook } from 'react-icons/im';
import { TbFileInvoice } from 'react-icons/tb';
import { TiSpanner } from 'react-icons/ti';

const HeaderConfig = () => {
  return (
    <Container>
      <Heading>Header</Heading>
      <Content>
          <h4>Client Billing</h4>
          <h4>Docs&nbsp;<a href='#' style={{ textDecoration: 'none', color: 'black'}}><BiLinkExternal /></a></h4>
      </Content>
    <Nav>
        <ul>
            <li>Overview</li>
            <li><HiUserGroup style={{ marginRight: "5px" }}/>Clients</li>
            <li><ImBook style={{ marginRight: "5px" }}/> Products &amp; Services</li>
            <li><TbFileInvoice style={{ marginRight: "5px" }}/>Invoices</li>
        </ul>
      <button><TiSpanner style={{ marginRight: "5px", background: 'transparent', width: '16px', height: '16px' }} />Configure</button>
    </Nav>
    </Container>
  )
}

export default HeaderConfig

const Container = styled.div `
    display: grid;
    align-items: center;
    justify-content: center;
    align-self: center;
    background: #F2F2F2;
    width: 100%;
    @media screen and ( max-width: 1050px ) {
      width: 100vw;
    }
`

const Heading = styled.div `
    background: #1A1A1A;
    height: 2rem;
    width: 100vw;
    @media screen and ( max-width: 1050px ) {
      width: 100%;
    }
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
    margin-left: 2rem;
    margin-top: 3rem;
    border-bottom: 1px solid #E6E6E6;
    padding-bottom: 1rem;
    @media screen and ( max-width: 1050px ) {
      justify-content: space-between;
      gap: calc(500px - 30vw);
      width: 100vw;
    }
`
const Nav = styled.nav `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 560px;
    max-width: 1050;
    height: 30px;
    font-weight: 700;
    font-size: 13px;
    line-height: 30px;
    margin-bottom: 35px;
    margin-right: 2rem;
    margin-bottom: 3rem;
    & ul {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    & li {
      list-style: none;
      gap: 16px;
      
    }
    & li:first-child {
      padding-right: 15px;
      border-right: 1px solid #E6E6E6;
    }
    & button {
      background: #E6E6E6;
      border: none;
      border-radius: 4px;
      font-weight: 700;
      font-size: 13px;
      line-height: 30px;
      width: 101px;
      height: 30px;
    }
    @media screen and ( max-width: 1050px ) {
      justify-content: space-between;
      gap: 10px;
      width: 100%;
    }
    @media screen and ( max-width: 490px ) {
    display: none;
    }
`