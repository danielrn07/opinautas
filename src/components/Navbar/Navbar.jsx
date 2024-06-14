import { HiOutlineUser } from 'react-icons/hi2'
import { PiPlus } from 'react-icons/pi';
import { NavLink } from 'react-router-dom'
import { LoginButtonContainer, Logo, NavbarContainer, PageTitle } from './styles'

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink to='/'>
        <Logo>O</Logo>
      </NavLink>
      <PageTitle>Explorar</PageTitle>

      {/* <div>
        <PiPlus size={24} />
        <UserProfileImage />
      </div> */}
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
    </NavbarContainer>
  )
}

export default Navbar
