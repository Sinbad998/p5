import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/logoFooter.png'




const FooterLogo = styled.img`
  height: 70px;
`

const FooterContainer = styled.nav`
  

  width: 100%
`

function Header() {
  return (
    <FooterContainer>
      <div>

      </div>
      <Link to="/">
        <FooterLogo src={Logo} />
      </Link>
    </FooterContainer>
  )
}

export default Header
