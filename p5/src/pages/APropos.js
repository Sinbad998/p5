import picture from '../assets/_Section 1.png'
import styled from 'styled-components'


const imgMontagnes = styled.img`
  height: 70px;
`

function APropos() {
    return (
      <div>
      <imgMontagnes src={picture} alt="Montagnes" />
      </div>
    )
  }
  
  export default APropos
  