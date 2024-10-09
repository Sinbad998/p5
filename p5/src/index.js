import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './autres/reportWebVitals';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Error from './components/Error/Error'
import APropos from './pages/APropos'
import Home from './pages/Home'
import Fichelogements from './pages/Fichelogements'
import Header from './components/Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/Fiche-logements" element={<Fichelogements />} />
        <Route path="/A-Propos" element={<APropos />} />
      </Routes>
    </Router>
  </React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
