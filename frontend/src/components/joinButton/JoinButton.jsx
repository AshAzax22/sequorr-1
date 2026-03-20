import React from 'react';
import styles from './JoinButton.module.css';

const JoinButton = ({ className }) => {
  const handleJoinClick = () => {
    console.log('Join the Movement clicked');
  };

  return (
    <button onClick={handleJoinClick} className={`${styles.btnPrimary} ${className ? className : ''}`}>
      Join the Movement
    </button>
  );
};

export default JoinButton;
