import React from 'react';

const Header = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>
        Do you have a plan or do you want to create one?
      </h1>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem ',
    backgroundColor: '#FF8C00',
    textAlign: 'center',
    margin: '2rem auto', // centers the container and adds space around it
    maxWidth: '400px',   // limits the width of the container
    borderRadius: '8px', // optional: adds rounded corners
  },
  header: {
    color: 'black',
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export default Header;
