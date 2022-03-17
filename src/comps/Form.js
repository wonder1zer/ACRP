import React from 'react';
import styled from 'styled-components';
import logo from '../imgs/Group 4logo.png';

const Form = () => {
  return (
    <Container>
      <img src={logo} alt='logo'/>
      <p>Login to ACRP</p>
        <form>
          <fieldset>
            <legend>Username</legend>
                <input placeholder='SM-23123' maxLength='8'></input>
          </fieldset>
          <fieldset>
            <legend>Password</legend>
                <input placeholder='Your password' maxLength='8'></input>
          </fieldset>
          <button>Login</button>
          <p>Forgot your password?</p>
          <p className='reg'>No account? <a href='#'>Create one</a></p>
        </form>
      
    </Container>

    
  )
}

export default Form

const Container = styled.div`
  width: 614px;
  height: 683px;
  background-color: #fff;
  padding: 80px 0 39.22px 80px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: normal;
  border-radius: 33.7275px;
  form{
    max-width: 453.63px;
    .reg{
      color: #000;
      margin: 17px 0 0 0;
      a{
        text-decoration: none;
        color: #4A5B8C;
      }
    }
    p{
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 32px;
      color: #4A5B8C;
      margin: 39px auto 0;
      text-align: center;
    }
    fieldset{
      width: 100%;
      margin: 0 0 24px 0;
      padding: 10.12px 0 10.12px 20.24px;
      border-radius: 4px;
      border-color: #dedede;
      input{
        border: none;
        font-size: 22px;
        width: 100%;
        :focus{
          outline: none;
        }
      }
        input::-webkit-input-placeholder {
          font-size: 15.18px;
          line-height: 33.73px;
      }
    }
    button{
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      color: #fff;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 34px;
      border-radius: 4px;
      width: 454px;
      height: 66px;
      background: #7D8C9B;
      border-color: transparent;
    }
  }
  
  p{
    font-size: 22px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;

  }
`