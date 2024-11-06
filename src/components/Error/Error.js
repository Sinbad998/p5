import Logo from '../../assets/404page.png'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'


const LogoError = styled.img`
height: 500px;
width : 500px
`

function Error() {
    return (
        <main className='error'>
            <LogoError src={Logo} />
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <StyledLink to="/">Retourner sur la page d'accueil</StyledLink>
        </main>
    )
}
 
export default Error