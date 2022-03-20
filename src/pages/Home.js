import React from 'react'
import styled from 'styled-components'
import Menu from '../comps/Menu'
import Welcome from '../comps/Welcome'

const Home = () => {
  return (
    <StyleHome>
        <Menu/> 
        <Welcome/>
    </StyleHome>

  )
}

export default Home

const StyleHome = styled.div`
    display: flex;
    flex-direction: row;
    width: 500px;
    height: 1080px;
    background-color: red;
`