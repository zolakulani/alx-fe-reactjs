function Footer() {
  return (
    <footer style={{
      background: '#333',
      color: '#fff',
      textAlign: 'center',
      padding: '15px 0',
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      zIndex: 100,
    }}>
      &copy; {new Date().getFullYear()} My Company. All rights reserved.
    </footer>
  );
}

export default Footer; 