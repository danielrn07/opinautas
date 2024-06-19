import { HiOutlineUser } from 'react-icons/hi2'
import { PiList, PiPlus } from 'react-icons/pi'

import { NavLink } from 'react-router-dom'

import {
  LoginButtonContainer,
  Logo,
  MenuIcon,
  NavbarContainer,
  PageTitle,
  UserProfileImage,
} from './styles'

import { useAuthValue } from '../../context/AuthContext'
import { useMenu } from '../../context/MenuContext'
import { useAuth } from '../../hooks/useAuth'

const Navbar = () => {
  const { user } = useAuthValue()
  const { logout } = useAuth()

  const { toggleMenu } = useMenu()

  return (
    <NavbarContainer>
      <NavLink to='/'>
        <Logo>O</Logo>
      </NavLink>
      <MenuIcon onClick={toggleMenu}>
        <PiList size={24} />
      </MenuIcon>
      <PageTitle>Explorar</PageTitle>
      {!user ? (
        <NavLink to='/login'>
          <LoginButtonContainer>
            <HiOutlineUser size={24} />
            <p>
              Entre ou
              <br />
              Cadastre-se
            </p>
          </LoginButtonContainer>
        </NavLink>
      ) : (
        <>
          <NavLink to='/submit'>
            <PiPlus size={24} />
          </NavLink>
          <UserProfileImage />
          <span onClick={logout}>Sair</span>
        </>
      )}
    </NavbarContainer>
  )
}

export default Navbar
