import { NavLink } from 'react-router-dom'
import { NavbarContainer, Logo, UserProfileImage, PageTitle } from './styles'
import { PiPlus } from "react-icons/pi";


const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLink to='/'>
        <Logo>O</Logo>
      </NavLink>
      <PageTitle>Explorar</PageTitle>
      <PiPlus size={24} />
      <UserProfileImage />
    </NavbarContainer>
  )
}

export default Navbar
