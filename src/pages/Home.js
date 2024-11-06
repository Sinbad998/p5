import Card from "../components/Card"
import picture from '../assets/sourceHome.png'
import Datas from "../utils/Datas.json"

const Home = ()=>{
  return(
    <main className="home">
      <div className="banner">
        <img src={picture} alt="Montagnes avec titre de page" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="gallery">
        <Card Datas={Datas}/>
      </div>
    </main>
  )
}


export default Home