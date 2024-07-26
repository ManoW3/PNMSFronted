import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Hello, Vite + React!</h1>
      <Button variant="contained" color="primary">
        Material-UI Button
      </Button>
    </div>
  );
}

export default App;
