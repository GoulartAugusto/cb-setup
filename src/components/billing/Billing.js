import React, { useState } from 'react';
import styled from 'styled-components';
import { IoIosAlert } from "react-icons/io";
import { Link } from 'react-router-dom';
import CurrencySelect from '../CurrencySelect';



const Billing = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [checked, setChecked] = useState(false);

  const dataSubmit= () => {
    return checked ? setIsDisabled(true) : setIsDisabled(false);
  };
 
  const onCheckboxClick = () => {
    setChecked(!checked);
    return dataSubmit();
  };

  return (
    <>
        <Back>
          <p style={{ display: 'flex', background: ''}}><Link to="/login" style={{ background: 'transparent'}}><button>{"<"}</button></Link>Back</p>
        </Back>
      <Container>
          <Info>
                <h1>Choose Billing Currency</h1>
                <p style={{ marginBottom: "30px"}}>Select the currency you want to use to bill your clients.</p>
              <Alert>
                  <p>
                    <IoIosAlert style={{
                      color: "#FFAC14", 
                      height: "15px", 
                      width: "16px", 
                      backgroundColor: "#FCF4E6", 
                      alignSelf: "flex-start", 
                      marginTop: "3px", 
                      marginRight: "5px"}} 
                      className="icon" 
                      />
                    Note: Billing currency cannot be changed in the future. Please make sure you select the correct currency.
                  </p>
              </Alert>
                <CurrencySelect />
          </Info>
            <Confirm>
              <input type={'checkbox'} onClick={onCheckboxClick}  />
              <h5>I am aware that I cannot change currency later</h5>
            </Confirm>
            <Link to="/configuration" style={{ textDecoration: 'none'}}><Button type="submit" disabled={isDisabled}>Finish Setup</Button></Link>
      </Container>
    </>
  )
}

export default Billing

const Container = styled.main `
    display: flex;
    flex-direction: column;
    background: transparent;
    align-items: center;
    position: absolute;
`

const Back = styled.div `
    display: flex;
    align-self: flex-start;
    z-index: 200;
    background: transparent;
    margin-top: 30px;
    margin-right: 870px;
    position: relative;
      & p {
          background: transparent;
          line-height: 30px;
          font-size: 13px;
          display: flex;
          align-items: center;
      }

      & button {
        width: 25px;
        height: 25px;
        background: white;
        border-radius: 4px;
        cursor: pointer;
        border-radius: 4px;
        border: 1px solid #EDEDED;
        margin-right: 8px;
      }
`

const Info = styled.div `
    display: flex;
    flex-direction: column;
    background: transparent;
    align-items: center;
    & button {
        width: 25px;
        height: 25px;
        background: white;
        border-radius: 4px;
        border: none;
        cursor: pointer;
        
    }
    & img {
        margin-bottom: 30px;
    }
    & h1 {
        background: transparent;
        margin-bottom: 10px;
        font-size: 30px;
    }
    & p {
        background: transparent;
        line-height: 30px;
        font-size: 15px;
        display: flex;
        align-items: center;
        letter-spacing: 0.26px;
    }
`


const Alert = styled.div `
    display: flex;
    width: 600px;
    height: 74px;
    background: #FCF4E6;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    margin-bottom: 20px;
    & p {
      background: transparent;
      font-size: 13px;
      line-height: 22px;
      max-width: 539px;
      max-height: 44px;
    }
    @media screen and ( max-width: 1050px ) {
        width: 100%;
      }
`

const Button = styled.button `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 126px;
    height: 40px;
    background: #286EF1;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.26px;
    :hover {
      cursor: pointer;
    }
    :disabled {
      color: #6B6B6B;
      background: #E6E6E6;
    }
`
const Confirm = styled.div `
    display: flex;
    background: transparent;
    h5 {
        background: transparent;
        margin-left: 10px;
        font-size: 15px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0.26px;
    }

`