import Card from "../components/Card"
import picture from '../assets/assetsHome.png'
import Datas from "../utils/Datas.json"

const Home = ()=>{
  return(
    <div className="home">
      <div className="banner">
        <img src={picture} alt="Montagnes avec titre de page" />
      </div>
      <div className="gallery">
        <Card Datas={Datas}/>
      </div>
    </div>
  )
}


export default Home