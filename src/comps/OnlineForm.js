import React from 'react'
import styled from 'styled-components'


const OnlineForm = () => {
  return (
    <StyledForm>
      OnlineForm
      <form>
        <select>
          <option>TCL</option>
          <option>Samsung</option>
          <option>LG</option>
          <option>Panasonic</option>
          <option>Apple</option>
        </select>
      </form>
    </StyledForm>
  )
}

export default OnlineForm

const StyledForm = styled.div`
  padding: 56px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  color: #4A5B8C;
`