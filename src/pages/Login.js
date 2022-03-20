import React from 'react'
import styled from 'styled-components'
import Main from '../comps/Main'
import Form from '../comps/Form'

const Login = () => {
  return (
    <Section className="App">
      <div id='marg'>
       <Main/>
       <Form/>
      </div>
    </Section>
  )
}

export default Login

const Section = styled.div`
  background-color: #E5F0FC;
  flex-direction: row;
  #marg{
    padding: 199px 159px;
    display: flex;
  }
`