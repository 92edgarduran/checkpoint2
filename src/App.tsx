import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Noticias from './pages/Noticias';
import DondeComer from './pages/DondeComer';
import Eventos from './pages/Eventos';
import Visitanos from './pages/Visitanos';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/donde-comer" element={<DondeComer />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/visitanos" element={<Visitanos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;



