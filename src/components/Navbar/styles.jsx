import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  background-color: rgb(255, 255, 255);
  padding: 0.8rem 1.6rem;  
  gap: 1.6rem;

  @media (min-width: 768px) {
    padding: 1.6rem 3.2rem;
  }
`

export const Logo = styled.div`
  font-size: 3.2rem;
  font-weight: bold;
`

export const PageTitle = styled.h1`
  flex-grow: 1;
  font-size: 1.6rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`

export const UserProfileImage = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  background-color: red;
`

export const LoginButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  p {
    font-size: 1.4rem;
    line-height: 1.2;
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.6rem;
    }

    svg {
      width: 30px;
      height: 30px;      
    }
  }
`
