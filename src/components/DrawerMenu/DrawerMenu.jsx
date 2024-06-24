import { useState } from 'react'
import { HiOutlineUser } from 'react-icons/hi2'
import { PiGithubLogo, PiHouse, PiLinkedinLogo, PiMedal, PiX } from 'react-icons/pi'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useMenu } from '../../context/MenuContext'
import { DrawerMenuContainer, LinksContainer, MenuTitle, SocialMediaContainer } from './styles'

const DrawerMenu = () => {
  const { menuIsOpen, toggleMenu } = useMenu()
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (query) {
      toggleMenu()
      return navigate(`/search?q=${query}`)
    }
  }

  return (
    <DrawerMenuContainer $menuIsOpen={menuIsOpen}>
      <PiX onClick={toggleMenu} className='close-icon' size={24} />

      <div className='navigation'>
        {/* <Link to='/' onClick={toggleMenu}>
          <Logo>
            <span>Opinautas</span>
          </Logo>
        </Link> */}

        <form onSubmit={handleSubmit}>
          <input placeholder='Pesquisar' onChange={(e) => setQuery(e.target.value)} value={query} />
        </form>

        <div>
          <LinksContainer>
            <MenuTitle>MENU</MenuTitle>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'isActive' : '')}
              onClick={toggleMenu}
            >
              {({ isActive }) => (
                <>
                  <PiHouse size={24} color={isActive ? 'rgb(255, 136, 0)' : 'rgb(128,128,128)'} />
                  <p>Explorar</p>
                </>
              )}
            </NavLink>

            <NavLink
              to='/profile'
              className={({ isActive }) => (isActive ? 'isActive' : '')}
              onClick={toggleMenu}
            >
              {({ isActive }) => (
                <>
                  <HiOutlineUser
                    size={24}
                    color={isActive ? 'rgb(255, 136, 0)' : 'rgb(128,128,128)'}
                  />
                  <p>Perfil</p>
                </>
              )}
            </NavLink>

            <NavLink
              to='/ranking'
              className={({ isActive }) => (isActive ? 'isActive' : '')}
              onClick={toggleMenu}
            >
              {({ isActive }) => (
                <>
                  <PiMedal size={24} color={isActive ? 'rgb(255, 136, 0)' : 'rgb(128,128,128)'} />
                  <p>Ranking</p>
                </>
              )}
            </NavLink>
          </LinksContainer>
        </div>
      </div>

      <SocialMediaContainer>
        <Link to='https://www.linkedin.com/in/danielrn07/'>
          <PiLinkedinLogo size={24} />
        </Link>
        <Link to='https://github.com/danielrn07/opinautas'>
          <PiGithubLogo size={24} />
        </Link>
      </SocialMediaContainer>
    </DrawerMenuContainer>
  )
}

export default DrawerMenu
