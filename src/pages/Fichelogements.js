import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Datas from "../utils/Datas.json";
import Collapse from "../components/Collapse/Collapse";

// Fonction pour trouver un logement en fonction de l'ID
const findPageByID = (id) => {
  return Datas.find((Data) => Data.id === id);
};

const Fichelogements = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const navigate = useNavigate(); // Pour la redirection
  const [Data, setData] = useState(null); // État pour stocker les données du logement
  const [index, setIndex] = useState(0); // Index pour le carrousel d'images

  useEffect(() => {
    const logement = findPageByID(id);
    if (!logement) {
      navigate("/error"); // Redirection si le logement n'existe pas
    } else {
      setData(logement); // Stocke les données du logement si elles existent
    }
  }, [id, navigate]);

  // Si les données ne sont pas encore chargées, ne rien afficher
  if (!Data) return null;

  const pictures = Data.pictures;

  // Fonction pour passer à l'image suivante
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  // Fonction pour revenir à l'image précédente
  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  return (
    <main className="logements">
      <div className="imgLogements">
        {/* Boutons pour naviguer entre les images */}
        {pictures.length > 1 && (
          <>
            <span className="Left" onClick={handlePrev}>&lt;</span>
            <span className="Right" onClick={handleNext}>&gt;</span>
          </>
        )}
        {/* Affichage des images du logement */}
        {pictures.map((picture, i) => (
          <img
            className={i === index ? "active" : ""}
            src={picture}
            alt={`Img ${i + 1}`}
            key={i}
            />
          ))}
          <p className="counter">{index + 1}/{pictures.length}</p>
      </div>

      <div className="info">
        <div className="logement-info">
          <div className="logement-title">
            <h2>{Data.title}</h2>
            <p>{Data.location}</p>
          </div>
          <div className="tags">
            {Data.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="host-info">
          <div className="host">
            <p>{Data.host.name}</p>
            <img src={Data.host.picture} alt={Data.host.name} className="host-picture" />
          </div>
          <div className="host-rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Data.rating ? "star-filled" : "star-empty"}>★</span>
            ))}
          </div>
        </div>
      </div>

      <div className="details">
        <Collapse title="Description">
          <p>{Data.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {Data.equipments.map((equipment, i) => (
              <li key={i}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </main>
  );
};

export default Fichelogements;
