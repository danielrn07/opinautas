import styled from 'styled-components'

export const DrawerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
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

  .social-media {
    display: flex;
    gap: 1.6rem;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }

  .navigation span {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  .navigation span p {
    font-size: 1.4rem;
    font-weight: 600;
  }

  @media (min-width: 1024px) {
    position: relative;
    transform: translateX(0);

    .close-icon {
      display: none;
    }
  }
`
