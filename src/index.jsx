import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './autres/reportWebVitals';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Error from './components/Error/Error'
import APropos from './pages/APropos'
import Home from './pages/Home'
import Fichelogements from './pages/Fichelogements'
import Header from './components/Header';
import Footer from './components/Footer'
import "./assets/scss/index.scss"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fiche-logements/:id" element={<Fichelogements />} />
        <Route path="/A-Propos" element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
    {/*<App />*/}
  </React.StrictMode>
);


reportWebVitals();
