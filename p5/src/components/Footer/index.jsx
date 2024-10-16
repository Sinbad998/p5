import styled from 'styled-components'
import Logo from '../../assets/D_Footer.png'




const FooterLogo = styled.img`
  height: 70px;
`

const FooterContainer = styled.nav`
  width: 100%
`

function Footer() {
  return (
    <footer>
        <FooterContainer>
            <div className='footerDiv'>
            <FooterLogo src={Logo} />
            <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </FooterContainer>
    </footer>
  )
}


export default Footer
