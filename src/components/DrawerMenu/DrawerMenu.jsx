import { HiOutlineUser } from 'react-icons/hi2'
import { PiGithubLogo, PiLinkedinLogo, PiMedal, PiX } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import { useMenu } from '../../context/MenuContext'
import { DrawerMenuContainer } from './styles'

const DrawerMenu = () => {
  const { menuIsOpen, toggleMenu } = useMenu()

  return (
    <DrawerMenuContainer $menuIsOpen={menuIsOpen}>
      <PiX onClick={toggleMenu} className='close-icon' size={24} />

      <div className='navigation'>
        <Link to='/profile' onClick={toggleMenu}>
          <HiOutlineUser size={24} />
          <p>Perfil</p>
        </Link>
        <Link to='/ranking' onClick={toggleMenu}>
          <PiMedal size={24} />
          <p>Ranking</p>
        </Link>
      </div>

      <div className='social-media'>
        <Link to='https://www.linkedin.com/in/danielrn07/'>
          <PiLinkedinLogo size={24} />
        </Link>
        <Link to='https://github.com/danielrn07/opinautas'>
          <PiGithubLogo size={24} />
        </Link>
      </div>
    </DrawerMenuContainer>
  )
}

export default DrawerMenu
