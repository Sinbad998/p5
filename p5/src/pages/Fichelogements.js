import { useParams } from "react-router-dom"
import Datas from "../utils/Datas.json"


const findLivreID = (id)=>{
  return Datas.find((Data)=>Data.id === id)
}

const  Fichelogements = () => {
  const{id}= useParams()
  const Data = findLivreID(id)
  const pictures = Data.pictures;
    return (
      <div>
        <h1>voici le livre avec l'id {id}</h1>
        <p>voici le titre du livre:{Data.title}</p>
        <p>voici la description : {Data.description}</p>
        {pictures.map((picture,index)=>{
          return (
            <img src ={picture} alt={picture.title} key={(picture,index)}/>
          )
        })
      }
      </div>
    )
  }
  
  export default Fichelogements
  