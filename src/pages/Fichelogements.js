import { useParams } from "react-router-dom";
import { useState } from "react";
import Datas from "../utils/Datas.json";

const findpageID = (id) => {
  return Datas.find((Data) => Data.id === id);
};

const Fichelogements = () => {
  const { id } = useParams();
  const Data = findpageID(id);
  const pictures = Data.pictures;
  const [index, setIndex] = useState(0);
  const [seeDescription, setDescription] = useState(false);
  const [seeEquipments, setEquipments] = useState(false);

  //augmente l'index et revient a 0 si on est a la derniere image
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  //effet inverse de handleNext
  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="logements">
      <div className="imgLogements">
        <span className="Left" onClick={handlePrev}>
          &lt;
        </span>
        <span className="Right" onClick={handleNext}>
          &gt;
        </span>
        {pictures.map((picture, i) => {
          return (
            <img className={i === index ? "active" : ""} src={picture} alt={`Img ${i + 1}`} key={i}/>
          );
        })}
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
        <div className="description">
        <button onClick={() => setDescription(!seeDescription)}>
          Description
          {!seeDescription && <span className="Top">&#94;</span>}
        </button>
          {seeDescription && <p>{Data.description}</p>}
        </div>
        <div className="equipments">
        <button onClick={() => setEquipments(!seeEquipments)}>
          Équipements
          {!seeEquipments && <span className="Top">&#94;</span>}
        </button>
          {seeEquipments && (
            <ul>
              {Data.equipments.map((equipment, i) => (
                <li key={i}>{equipment}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
};

export default Fichelogements;
