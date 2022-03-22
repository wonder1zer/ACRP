import React from 'react'
import {Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import Menu from '../comps/Menu'
import Welcome from '../comps/Welcome'
import OnlineForm from "../comps/OnlineForm";
import Login from '../pages/Login'


const Home = () => {
  return (
    <StyleHome>
        <Menu/> 
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Welcome/>}/>
            <Route path='/online' element={<OnlineForm/>}/>
        </Routes>
    </StyleHome>

  )
}

export default Home

const StyleHome = styled.div`
    display: flex;
    flex-direction: row;
    width: 500px;
    height: 1080px;
`