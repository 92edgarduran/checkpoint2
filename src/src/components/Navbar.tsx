import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <Link to="/" style={{ margin: '0 1rem', color: '#fff' }}>Inicio</Link>
      <Link to="/noticias" style={{ margin: '0 1rem', color: '#fff' }}>Noticias</Link>
      <Link to="/donde-comer" style={{ margin: '0 1rem', color: '#fff' }}>Dónde Comer Hoy</Link>
      <Link to="/eventos" style={{ margin: '0 1rem', color: '#fff' }}>Eventos</Link>
      <Link to="/visitanos" style={{ margin: '0 1rem', color: '#fff' }}>Visítanos</Link>
      <Link to="/contacto" style={{ margin: '0 1rem', color: '#fff' }}>Contacto</Link>
    </nav>
  );
}

export default Navbar;

