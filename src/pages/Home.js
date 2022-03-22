import React from 'react'
import {Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import Menu from '../comps/Menu'
import Welcome from '../comps/Welcome'
import OnlineForm from "../comps/OnlineForm";
import Upload from "../comps/Upload";
import Notification from "../comps/Notification";
import Ticket from "../comps/Ticket";
import Summ from "../comps/Summ";



const Home = () => {
  return (
    <StyleHome>
        <Menu/> 
        <Routes>
            <Route path='/' element={<Welcome/>}/>
            <Route path='/online' element={<OnlineForm/>}/>
            <Route path='/upload' element={<Upload/>}/>
            <Route path='/notification' element={<Notification/>}/>
            <Route path='/ticket' element={<Ticket/>}/>
            <Route path='/summ' element={<Summ/>}/>
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