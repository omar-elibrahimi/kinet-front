import React from 'react';
import { Link } from 'react-router-dom';

const PlanButtons = () => {
  return (
    <div style={styles.buttonContainer}>
        <Link to="/existing-plan">
      <button style={styles.button}>Choose Existing Plan</button>
      </Link>
      <Link to="/new-plan">
      <button style={styles.button}>Create a New Plan</button>
      </Link>
    </div>
  );
};

const styles = {
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem 0', // space above and below the buttons
    
  },
  button: {
    padding: '1rem 2rem',
    margin: '0 1rem', // space between the buttons
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'orange',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    Width: '100px',
    transition: 'background-color 0.3s', // smooth transition for hover effect
  },
};

// Optional: Adding hover effect
const buttonHoverStyle = {
  ...styles.button,
  backgroundColor: '#cc8400', // darker shade for hover
};


export default PlanButtons;
