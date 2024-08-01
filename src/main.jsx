import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp.jsx';
import HomePage from './components/HomePage.jsx';
import ProfileSetup from './components/ProfileSetup.jsx';
import Chat from './components/Chat.jsx';
import LessonScreen from './components/LessonScreen.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
    {/* <LessonScreen /> */}
  </React.StrictMode>,
);