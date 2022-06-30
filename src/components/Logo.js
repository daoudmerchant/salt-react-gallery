import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.div`
    padding: .8em 1.5em;
    margin: 1em;
    font-size: .4em;
    border-radius: 20px;
    background: #385f89;
    color: white;
    font-family: 'Source Code Pro', monospace;
    h1 {
        margin-block: .2em;
    }
`

const Constructor = styled.span`
    color: #77f2df;
`

const Function = styled.span`
    color: #fffb5a;
`

const Logo = () => {
  return (
    <LogoContainer>
        <h1><Constructor>Promise</Constructor>.<Function>all</Function>()</h1>
    </LogoContainer>
  )
}

export default Logo

Promise.all()