import React from 'react';
import './error-page-styles.scss';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  const errorButtonHandler = () => {
    navigate('/main');
  };

  return (
    <div className="error-page-wrapper">
      <div className="text-container">
        <p className="oops">OOPS! PAGE NOT FOUND</p>
        <p className="number-error">404</p>
        <p className="error-text">WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND</p>
      </div>
      <Button variant="outlined" onClick={errorButtonHandler}>
        HOME
      </Button>
    </div>
  );
};

export default ErrorPage;
