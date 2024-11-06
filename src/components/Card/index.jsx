import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Card = ({Datas})=>{
    return (
        Datas.map((Data)=>(
            <Link to ={`/Fiche-logements/${Data.id}`} className="Card" key={Data.id}>
                <img src={Data.cover} alt={Data.title} />
                <h3>{Data.title}</h3>
            </Link>
        ))
    )
}

Card.propTypes = {
     Datas: PropTypes.array.isRequired
}

export default Card