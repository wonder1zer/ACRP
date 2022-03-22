import React from 'react'
import styled from 'styled-components'
import acrp from '../imgs/Group 4logo.png'

const Welcome = () => {
  return (
    <StyleWelcome>
      <div>
        <img src={acrp} alt='logo'/>
        <p>
          welcome to the system
        </p>
      </div>
    </StyleWelcome>
  )
}

export default Welcome

const StyleWelcome = styled.div`
  position: relative;
  div{
    position: absolute;
    top: 408px;
    left: 509px ;
    img{
      width: 536px;
      margin: 0 0 48.66px 0;
    }
    p{
      border-top: #000;
      border-style: dashed;
      border-width: 1px 0 0 0;
      padding: 48.66px 0 0 0;
      margin: 0;
      height: 25.09px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 400;
      line-height: 25px;
      font-size: 23.5688px;
      letter-spacing: 0.5em;
      text-transform: uppercase;
      color: #606060;
    }
  }

`