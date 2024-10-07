import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><a href="#home" style={styles.link}>HOME</a></li>
        <li style={styles.navItem}><a href="#planning" style={styles.link}>PLANNING</a></li>
        <li style={styles.navItem}><a href="#profile" style={styles.link}>PROFILE</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#FF8C00',
    padding: '1rem',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    padding: 0,
    margin: 0,
  },
  navItem: {
    margin: '0 1rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
};

export default Navbar;
