import picture from '../assets/assetsApropos.png'; 
import { aboutList } from '../utils/about.js'; 
import Collapse from '../components/Collapse/Collapse.js'; // Import du composant Collapse

function APropos() {
  return (
    <main>
      {/* Bannière de la page À Propos */}
      <div className='banner-about'>
        <img src={picture} alt="Montagnes" />
      </div>

      <div className="detail">
        {aboutList.map((item) => (
          <Collapse key={item.title} title={item.title}>
            {item.content}
          </Collapse>
        ))}
      </div>
    </main>
  );
}

export default APropos;
