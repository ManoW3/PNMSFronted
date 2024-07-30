import React, { useState, useEffect, useRef } from 'react';
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Pусский', flag: '🇷🇺' },
  { code: 'zh', name: '中国人', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국말', flag: '🇰🇷' },
  { code: 'ar', name: 'عربي', flag: '🇸🇦' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'pl', name: 'Polish', flag: '🇵🇱' },
  { code: 'nl', name: 'Polski', flag: '🇳🇱' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'he', name: 'עִברִית', flag: '🇮🇱' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'ta', name: 'தமிழ்', flag: '🇱🇰' },
  { code: 'be', name: 'বাংলা', flag: '🇧🇩' },
  { code: 'fi', name: 'Wikang Filipino', flag: '🇵🇭' },
  { code: 'pu', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { code: 'so', name: 'Somali', flag: '🇸🇴' },
  { code: 'cr', name: 'Kreyòl', flag: '🇭🇹' },
  { code: 'in', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'al', name: 'Shqip', flag: '🇦🇱' },
  { code: 'ma', name: 'Mam', flag: '🇬🇹' },
  { code: 'ur', name: 'اردو', flag: '🇵🇰' },
  { code: 'uk', name: 'Ukrajins’ka', flag: '🇺🇦' },
];




const experienceLevels = ['Beginner', 'Basic', 'Intermediate', 'Competent', 'Advanced', 'Expert'];




const learningGoals = [
  { id: 'speaking', label: 'Improve Speaking' },
  { id: 'reading', label: 'Enhance Reading' },
  { id: 'writing', label: 'Develop Writing' },
  { id: 'listening', label: 'Boost Listening' },
  { id: 'grammar', label: 'Master Grammar' },
  { id: 'vocabulary', label: 'Expand Vocabulary' },
  { id: 'conversation', label: 'Practice Conversation' },
  { id: 'pronunciation', label: 'Perfect Pronunciation' },
];




const ProfileSetup = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [experienceLevel, setExperienceLevel] = useState(0);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [showGoalWarning, setShowGoalWarning] = useState(false);
  const rangeRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };


  useEffect(() => {
    setIsFormValid(selectedLanguage !== '' && selectedGoals.length >= 3);
    setShowGoalWarning(selectedGoals.length > 0 && selectedGoals.length < 3);
  }, [selectedLanguage, selectedGoals]);


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  const getBackgroundColor = () => {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = scrollY / maxScroll;
    const startColor = [84, 84, 84]; // Starting Collor
    const endColor = [175, 225, 175]; // Ending Collor
    const resultColor = startColor.map((start, i) => Math.round(start + scrollFraction * (endColor[i] - start)));
    return `rgb(${resultColor.join(',')})`;
  };




  const handleGoalToggle = (goalId) => {
    setSelectedGoals(prevGoals =>
      prevGoals.includes(goalId)
        ? prevGoals.filter(id => id !== goalId)
        : [...prevGoals, goalId]
    );
  };




  const handleSaveProfile = () => {
    if (isFormValid) {
      console.log('Profile saved', { selectedLanguage, experienceLevel, selectedGoals });
      // Here you would typically send this data to your backend or perform further actions
    }
    navigate('/chat'); // Navigate to Chat component
  };




  const handleRangeChange = (e) => {
    setExperienceLevel(parseInt(e.target.value));
  };




  const handleRangeMouseUp = () => {
    const closestLevel = Math.round(rangeRef.current.value);
    setExperienceLevel(closestLevel);
  };




  return (
    <div className="min-h-screen flex justify-center p-4" style={{ backgroundColor: getBackgroundColor() }}>




      <style jsx global>{`
        body {
          scrollbar-width: thin;
          scrollbar-color: #6a994e #f2e8cf;
        }
        body::-webkit-scrollbar {
          width: 8px;
        }
        body::-webkit-scrollbar-track {
          background: #f2e8cf;
        }
        body::-webkit-scrollbar-thumb {
          background-color: #6a994e;
          border-radius: 4px;
          border: 2px solid #f2e8cf;
        }
        body::-webkit-scrollbar-thumb:hover {
          background-color: #386641;
        }
      `}</style>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl my-8">
        <h1 className="text-8xl font-bold mb-8 text-[#386641] text-center">Profile Setup </h1>
        <i class="flag flag-us"></i>
        <i class="flag flag-poland"></i>
        <i class="flag flag-china"></i>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-[#386641]">Select your native language</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-[#f2e8cf] rounded-lg p-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code)}
                className={`flex items-center justify-center p-4 rounded-lg transition-all ${
                  selectedLanguage === lang.code
                    ? 'bg-[#386641] text-white'
                    : 'bg-white text-[#386641] hover:bg-[#a7c957] hover:text-white'
                }`}
              >
                <span className="text-2xl mr-2">{lang.flag}</span>
                <span className="font-medium text-2xl">{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
       
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-[#386641]">Your current English level</h2>
          <input
            type="range"
            min="0"
            max="5"
            value={experienceLevel}
            onChange={handleRangeChange}
            onMouseUp={handleRangeMouseUp}
            ref={rangeRef}
            className="w-full h-2 bg-[#A7C957] rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-2">
            {experienceLevels.map((level, index) => (
              <span key={level} className={`text-sm ${index === experienceLevel ? 'text-[#386641] font-bold' : 'text-[#6A994E]'}`}>
                {level}
              </span>
            ))}
          </div>
        </div>
       
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-[#386641]">Learning Goals (Select at least 3)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {learningGoals.map((goal) => (
              <label key={goal.id} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedGoals.includes(goal.id)}
                  onChange={() => handleGoalToggle(goal.id)}
                  className="form-checkbox h-5 w-5 text-[#A7C957] rounded focus:ring-[#6A994E]"
                />
                <span className="text-[#386641]">{goal.label}</span>
              </label>
            ))}
          </div>
          {showGoalWarning && (
            <p className="text-[#bc4749] mt-2">Please select at least 3 learning goals.</p>
          )}
        </div>
       
        <button
          className={`w-full py-3 px-4 rounded-lg transition-colors text-lg font-semibold ${
            isFormValid
              ? 'bg-[#A7C957] text-white hover:bg-[#6A994E]'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          onClick={handleSaveProfile}
          disabled={!isFormValid}
        >
          Save Profile
        </button>
        {!isFormValid && selectedLanguage === '' && (
          <p className="text-[#bc4749] mt-2 text-center">Please select your native language.</p>
        )}
      </div>
    </div>
  );
};




export default ProfileSetup;