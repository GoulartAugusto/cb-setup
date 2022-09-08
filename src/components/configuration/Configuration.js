import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styled from 'styled-components';

const Configuration = () => {
  return (
    <Container>
      <Loading><AiOutlineLoading3Quarters style={{ height: '44px', width: '44px', background: '#ffffff' }} className="Logo"/></Loading>
      <h1>Importing Stripe Configurations</h1>
      <p>Please wait while we are importing your Stripe configurations. It will only take a few seconds…</p>
    </Container>
  )
}

export default Configuration

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;

    & h1 {
      background: transparent;
      height: 35px;
      font-weight: 700;
      font-size: 24px;
      line-height: 35px;
      text-align: center;
      letter-spacing: 0.26px;
      margin-bottom: 10px;
    }
    & p {
      background: transparent;
      color: #555555;
      width: 520px;
      height: 60px;
      font-weight: 400;
      font-size: 15px;
      line-height: 30px;
      text-align: center;
      letter-spacing: 0.26px;

      @media screen and ( max-width: 490px ) {
      width: 320px;
    }
    }
`

const Loading = styled.div `
    height: 44px;
    width: 44px;
    color: #AAAAAA;
    margin-bottom: 30px;
    background: transparent;

    @media (prefers-reduced-motion: no-preference) {
    .Logo {
      animation: Logo-spin infinite 5s linear;
    }

      @keyframes Logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
`