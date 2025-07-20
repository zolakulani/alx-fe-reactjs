import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#333',
      padding: '10px 0',
      marginBottom: '20px',
    }}>
      <Link to="/" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
      <Link to="/about" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
      <Link to="/services" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>Services</Link>
      <Link to="/contact" style={{ color: '#fff', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>Contact</Link>
    </nav>
  );
}

export default Navbar; 