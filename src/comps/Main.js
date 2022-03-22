import React from 'react'
import styled from 'styled-components'
import acrp from '../imgs/8702 1ACRP.png'

const Main = () => {
  return (
    <StyleMain>
        <img src={acrp}/>
        <h2>About Artel Claim Reports Portal (ACRP)</h2>
        <p>Timely registration of defects and defects in components, semi-finished products and raw materials at the Artel TV production plant and prompt communication with the supplier, as well as defective products of OTK and Procurement Department staff plan to launch ACRP - Artel Claim Reports Portal web application to manage and control the process of working with and to obtain general statistical and analytical data.</p>
    </StyleMain>
  )
}

export default Main

const StyleMain = styled.div`
    margin: 0 126px 0 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    h2{
        color: #4A5B8C;
    }
    img{
        width: 862px;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 32px;
    }
    p{
        color: #121212;
        width: 862px;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 32px;
    }
`