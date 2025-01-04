import PropTypes from "prop-types"; // Importe PropTypes pour la validation des types de props
import { Link } from "react-router-dom"; // Importe le composant Link pour gérer les liens internes dans l'application
// carte cliquable
// Définition du composant Card
const Card = ({Datas}) => {
  return (
    // On parcourt le tableau Datas pour créer une carte pour chaque logement
    Datas.map((Data) => (
      <Link to={`Fiche-logements/${Data.id}`} className="Card" key={Data.id}>
        {/* Affichage de l'image de couverture du logement */}
        <img src={Data.cover} alt={Data.title} />
        {/* Affichage du titre du logement */}
        <h3>{Data.title}</h3>
      </Link>
    ))
  );
}

// Définition des types de props attendus pour Card
Card.propTypes = {
  Datas: PropTypes.array.isRequired,
}

export default Card; // Export du composant Card
