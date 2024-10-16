import Logo from '../../assets/404page.png'
import styled from 'styled-components'


const LogoError = styled.img`
height: 500px;
width : 500px
`

function Error() {
    return (
        <div className='error'>
            <LogoError src={Logo} />
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <p>Retourner sur la page d'accueil</p>
        </div>
    )
}
 
export default Error