import picture from '../assets/assetsApropos.png';
import { useState } from "react";
import { aboutList } from '../utils/about.js';


function APropos() {
  const [currentSection, setCurrentSection] = useState(null);

  const handleClick = (title) => {
    setCurrentSection(currentSection === title ? null : title);
  };


  return (
    <main>
      <div className='banner-about'>
      <img src={picture} alt="Montagnes" />
      </div>
      <div className="detail">
        {aboutList.map((item) => (
          <div key={item.title} className={item.title.toLowerCase()}>
            <button onClick={() => handleClick(item.title)}>
              {item.title}
              <span className={`arrow ${currentSection === item.title ? "up" : "down"}`}>
                &#94;
              </span>
            </button>
            {currentSection === item.title && <p>{item.content}</p>}
          </div>
        ))}
      </div>
    </main>
  );
}

export default APropos;
