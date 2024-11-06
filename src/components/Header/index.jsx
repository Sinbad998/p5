import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/Screen=Desktop, Active=Accueil.png'
import { StyledLink } from '../../utils/style/Atoms'



const HomeLogo = styled.img`
  height: 70px;
`


const NavContainer = styled.nav`
padding: 30px;
display: flex;
  justify-content: space-between;
  align-items: center;
  `

  function Header() {
    return (  
    <header>
      <NavContainer className='headerNav'>
        <Link to="/">
          <HomeLogo src={Logo} />
        </Link>
        <div className='lienA'>
          <StyledLink to="/">Accueil</StyledLink>
          <StyledLink to="/A-Propos">A propos</StyledLink>
        </div>
      </NavContainer>
    </header>
  )
}

export default Header
