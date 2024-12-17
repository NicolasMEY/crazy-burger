import React from 'react'
import styled from 'styled-components';

export default function CasinoEffect({count,className}) {
  return (

        <TransitionGroup component={CasinoEffectStyled} >

       <CSSTransition className="count-animated" timeout={5000} key={count}
        >
        <span className={className}>{count}</span>
        </CSSTransition>

        </TransitionGroup>
    
  )
}
const CasinoEffectStyled = styled.div`
  

  count-animated-enter {}
  count-animated-enter-active {}
  count-animated-enter-done {}

  count-animated-exit {}
  count-animated-exit-active {}
  count-animated-exit-done {}
`;
