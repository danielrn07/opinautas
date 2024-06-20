import { HiOutlineUser } from 'react-icons/hi2'
import { PiGithubLogo, PiLinkedinLogo, PiMedal, PiX } from 'react-icons/pi'
import { useMenu } from '../../context/MenuContext'
import { DrawerMenuContainer } from './styles'
import { Link } from 'react-router-dom'

const DrawerMenu = () => {
  const { menuIsOpen, toggleMenu } = useMenu()

  return (
    <DrawerMenuContainer $menuIsOpen={menuIsOpen}>
      <PiX onClick={toggleMenu} className='close-icon' size={24} />

      <div className='navigation'>
        <Link>
          <HiOutlineUser size={24} />
          <p>Perfil</p>
        </Link>
        <Link to='/ranking'>
          <PiMedal size={24} />
          <p>Ranking</p>
        </Link>
      </div>

      <div className='social-media'>
        <span>
          <PiLinkedinLogo size={24} />
        </span>
        <span>
          <PiGithubLogo size={24} />
        </span>
      </div>
    </DrawerMenuContainer>
  )
}

export default DrawerMenu
