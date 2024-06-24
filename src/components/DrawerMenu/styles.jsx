import styled from 'styled-components'

export const DrawerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1.6rem;
  min-width: 31rem;
  height: 100svh;
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 0;
  left: 0;
  padding: 2.4rem 3.2rem;
  transition: transform 0.3s;
  transform: ${(props) => (props.$menuIsOpen ? 'translateX(0)' : 'translateX(-100%)')};

  input {
    width: 100%;
    flex-grow: 1;
  }

  .close-icon {
    display: block;
    align-self: flex-end;
  }

  .navigation {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    flex-grow: 1;
  }

  .navigation .isActive {
    padding: 0.8rem 2.9rem;
    min-width: 100%;
    background-color: rgba(255, 136, 0, 0.2);
    border-left: 0.3rem solid rgb(255, 136, 0);
    color: rgb(255, 136, 0);
    box-sizing: border-box;
  }

  .navigation div a {
    display: flex;
    align-items: center;
    font-weight: 600;
    padding: 0.8rem 3.2rem;
    gap: 0.8rem;
    box-sizing: border-box;
  }

  .navigation a p {
    font-size: 1.4rem;
  }

  @media (min-width: 1024px) {
    position: relative;
    transform: translateX(0);

    .close-icon {
      display: none;
    }
  }
`

export const Logo = styled.div`
  font-size: 3.2rem;
  font-weight: bold;

  @media (min-width: 1024px) {
    display: none;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: absolute;
  margin-top: 0.8rem;
  left: 0;
  right: 0;
`

export const MenuTitle = styled.p`
  padding: 0 3.2rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: rgb(128, 128, 128);
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  min-width: 50px;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  justify-content: center;
`
