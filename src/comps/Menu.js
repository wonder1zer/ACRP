import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import acrp from '../imgs/Group 4logo.png'
import summ from '../imgs/summ.png'
import notification from '../imgs/notification.png'
import online from '../imgs/online.png'
import upload from '../imgs/upload.png'
import ticket from '../imgs/ticket.png'
import close from '../imgs/close.png'
import user from '../imgs/user.png'

const Menu = () => {
  return (
    <SideMenu>
        <Link to='/'><img src={acrp} alt='logo'/></Link>
        <ul>
            <Link to='/online'><li><img src={online} alt='online'/>Onlive Form</li></Link>
            <Link to='/upload'><li><img src={upload} alt='upload'/>Ticket Upload</li></Link>
            <Link to='/notification'><li><img src={notification} alt='notification'/>Notification</li></Link>
            <Link to='/ticket'><li><img src={ticket} alt='ticket'/>Tickets</li></Link>
            <Link to='/summ'><li><img src={summ} alt='summ'/>Summary</li></Link>
            <div id='bot'>
                <li><img src={close} alt='close'/>Close sidebar</li>
                <li><a href='#'><img src={user} alt='user'/>Shoxrux Raxmatov</a></li>
            </div>
        </ul>
    </SideMenu>
  )
}

export default Menu

const SideMenu = styled.div`
    width: 363px;
    height: 1080px;
    background-color: #ECF2F8;
    padding: 48px 93px 0 56px;
    img{
       width: 214px;
    }
    ul{
        #bot{
            margin: 200px 0 0 0;
        }
        list-style: none;
        margin: 255px 0 0 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 18px;
        font-weight: 700;
        line-height: 40px;
        padding: 0;
        a{
                text-decoration: none;
                color: #121212;
            }
            a:hover{
                cursor: pointer;
            }
        li{
            margin: 0 0 40px 0;
        }
        img{
            width: 24px;
            height: 24px;
            margin: 0 16px 0 0;
        }

    }
`
