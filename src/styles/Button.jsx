import { PiCaretRight, PiMinus } from 'react-icons/pi'
import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-size: 1.6rem;
  padding: 0.8rem 1.6rem;
  max-width: 20rem;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  cursor: pointer;

  &:hover div div {
    display: block;
    animation: ${slideIn} 0.3s forwards;
  }
`

const PiContainer = styled.div`
  display: none;
  margin-right: -18px;
`

const Arrow = styled.div`
  display: flex;

  .arrow-right {
    align-self: flex-end;
  }
`

export const Button = ({ children }) => {
  return (
    <ButtonContainer>
      <span>{children}</span>
      <Arrow>
        <PiContainer>
          <PiMinus size={24} />
        </PiContainer>
        <PiCaretRight className='arrow-right' size={24} />
      </Arrow>
    </ButtonContainer>
  )
}
