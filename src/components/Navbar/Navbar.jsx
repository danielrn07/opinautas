import { HiOutlineUser } from 'react-icons/hi2'
import { PiPlus } from 'react-icons/pi'

import { NavLink } from 'react-router-dom'

import { LoginButtonContainer, Logo, NavbarContainer, PageTitle, UserProfileImage } from './styles'

import { useAuthValue } from '../../context/AuthContext'
import { useAuth } from '../../hooks/useAuth'

const Navbar = () => {
  const { user } = useAuthValue()
  const { logout } = useAuth()

  return (
    <NavbarContainer>
      <NavLink to='/'>
        <Logo>O</Logo>
      </NavLink>
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
          <PiPlus size={24} />
          <UserProfileImage />
          <span onClick={logout}>Sair</span>
        </>
      )}
    </NavbarContainer>
  )
}

export default Navbar
