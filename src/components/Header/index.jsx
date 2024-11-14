import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/Screen=Desktop, Active=Accueil.png'
import { StyledLink } from '../../utils/style/Atoms'
import { NavLink } from 'react-router-dom';


const HomeLogo = styled.img`
  height: 70px;
`


const NavContainer = styled.nav`
padding: 30px;
display: flex;
  justify-content: space-between;
  align-items: center;
  `

  const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  margin-right: 20px;
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;

  &.active {
    border-bottom: 1px solid black;
    justify-content: center
    bottom: -5px
  }
`;

  function Header() {
    return (  
    <header>
      <NavContainer className='headerNav'>
        <Link to="/">
          <HomeLogo src={Logo} />
        </Link>
        <div className='lienA'>
          <StyledNavLink exact to="/" activeClassName="active">Accueil</StyledNavLink>
          <StyledNavLink to="/A-Propos" activeClassName="active">A propos</StyledNavLink>
        </div>
      </NavContainer>
    </header>
  )
}

export default Header
