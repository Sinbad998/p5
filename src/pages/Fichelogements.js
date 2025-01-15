import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Datas from "../utils/Datas.json";
import Collapse from "../components/Collapse/Collapse";

const findPageByID = (id) => {
  return Datas.find((Data) => Data.id === id);
};

const Fichelogements = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const navigate = useNavigate(); // Pour la redirection
  const [Data, setData] = useState(null); 
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const logement = findPageByID(id);
    if (!logement) {
      navigate("/error"); 
    } else {
      setData(logement); 
    }
  }, [id, navigate]);


  if (!Data) return null;

  const pictures = Data.pictures;


  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  return (
    <main className="logements">
      <div className="imgLogements">
        {pictures.length > 1 && (
          <>
            <span className="Left" onClick={handlePrev}>&lt;</span>
            <span className="Right" onClick={handleNext}>&gt;</span>
          </>
        )}
        {pictures.map((picture, i) => (
          <img
            className={i === index ? "active" : ""}
            src={picture}
            alt={`Img ${i + 1}`}
            key={i}
            />
          ))}
          {pictures.length > 1 && (
            <p className="counter">{index + 1}/{pictures.length}</p>
          )}
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
