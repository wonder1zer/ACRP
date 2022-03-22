import React from 'react'
import styled from 'styled-components'


const OnlineForm = () => {
  return (
    <StyledForm>
      <p>
        OnlineForm
      </p>
      <div>
        <form>
          <label for='TV'>Choose the distibutor</label>
          <select id='TV' >
            <option>TCL</option>
            <option>Samsung</option>
            <option>LG</option>
            <option>Panasonic</option>
            <option>Apple</option>
          </select>
          <p>
            Notifications
          </p>
          <select>
            <option>English</option>
            <option>Russian</option>
            <option>Uzbek</option>
          </select>
        </form>
      </div>
      
    </StyledForm>
  )
}

export default OnlineForm

const StyledForm = styled.div`
  p{
    margin: 0;
  }
  padding: 56px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  color: #4A5B8C;
  display: inline-block;
  div{
    position: absolute;
    top: 48px;
    right: 107px;
    height: 56px;
    p{
      padding: 0 40px 0 52px; 
      margin: 0;
    }
    form{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      label{
        margin: 0 24px 0 0;
      }
      select{
        width: 93px;
        border: none;
        height: 48px;
        
      }
      #TV{
        width: 232px;
        border: none;
        padding: 4px 0px 4px 16px;
        background-color: #f2f2f2;
        option{
          background-color: #fff;
          border: none;
        }
      }
    }
  }
`