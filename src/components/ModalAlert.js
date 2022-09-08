import React, { useState } from 'react';
import styled from 'styled-components';
import Megaphone from "../images/megaphone.png"

const ModalAlert = () => {
  const [isShown, setIsShown] = useState(true);

  const handleClick = (e) => {
    // Change the visibility of the Alert
    setIsShown(current => !current);
  };

  return (
    <Modal style={{display: isShown ? 'flex' : 'none'}}>
        <img src={Megaphone} alt="Alert" style={{ height: '61px' }}/>
        <Text>
          <h5>Upgrade to pay 0% transaction fee</h5>
          <p>Pay 0% transaction fee and get added benefits by upgrading your account.</p>
        </Text>
        <Upgrade onClick={handleClick}>Upgrade</Upgrade>
    </Modal>
  )
}

export default ModalAlert

// Have to make a function to "display: none" onClick of "upgrade" button

const Modal = styled.div `
  width: 1050px;
  height: 101px;
  background: #D5E3FD;
  border-radius: 10px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h5 {
    background: transparent;
    margin-bottom: 0.5rem;
    margin-left: -250px;
  }
  & p {
    background: transparent;
    margin-left: -250px;
  }
  & img {
    background: transparent;
    margin: 20px;
  }
  & button:hover {
        cursor: pointer;
    }
    @media screen and ( max-width: 1050px ) {
        width: calc(100% - 20%);
        & img {
          display: none;
        }
      }
`

const Upgrade = styled.button `
    width: 101x;
    height: 40px;
    background: #286EF1;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    padding: 13px 25px 13px 25px;
    margin: 30px;
`

const Text = styled.div `
  background: transparent;
  @media screen and ( max-width: 1050px ) {
        width: 280px;
        text-align: justify;
        display: flex;
        flex-direction: column;
        & h5 {
          margin-left: 10px;
        }
        & p {
          margin-left: 10px;
        }
      }
`


