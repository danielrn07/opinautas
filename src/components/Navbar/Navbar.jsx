import { HiOutlineUser } from 'react-icons/hi2'
import { PiPlus } from 'react-icons/pi';

import { NavLink } from 'react-router-dom'

import { LoginButtonContainer, UserProfileImage, Logo, NavbarContainer, PageTitle } from './styles'

import { useAuthValue } from '../../context/AuthContext';

const Navbar = () => {
  const { user } = useAuthValue()
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
              <p>Entre ou<br />Cadastre-se</p>
          </LoginButtonContainer>
        </NavLink>
      ) : (
        <>
          <PiPlus size={24} />
          <UserProfileImage />
        </>
      )}
    </NavbarContainer>
  )
}

export default Navbar
