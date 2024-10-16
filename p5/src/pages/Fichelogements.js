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
        {pictures.map((picture,index)=>{
          return (
            <img src ={picture} alt={picture.title} key={(picture,index)}/>
          )
        })
      }
      <p>{Data.title}</p>
      <p>{Data.description}</p>
      </div>
    )
  }
  
  export default Fichelogements
  