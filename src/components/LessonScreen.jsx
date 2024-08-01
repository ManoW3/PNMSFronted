import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Moon, Sun, X } from 'lucide-react';

const LessonSelectionScreen = () => {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const lessons = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
    setSidebarOpen(true);
  };

  const handleStartLesson = () => {
    if (selectedLesson) {
      console.log(`Starting Lesson: ${selectedLesson}`);
      navigate('/chat');
    }
  };

  const getLessonObjectives = (lesson) => {
    return [
      `Understand key concepts of Lesson ${lesson}`,
      `Practice core skills related to Lesson ${lesson}`,
      `Complete exercises demonstrating mastery of Lesson ${lesson} material`
    ];
  };

  return (
    <div className={`min-h-screen flex transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#F2E8CF]'}`}>
      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 w-80 h-full p-6 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg z-20`}
      >
        <button 
          onClick={() => setSidebarOpen(false)}
          className={`absolute top-4 right-4 p-1 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-[#A7C957]'}`}
        >
          <X className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-[#386641]'}`} />
        </button>
        <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-[#386641]'}`}>Lesson Objectives</h2>
        {selectedLesson && (
          <ul className="space-y-2">
            {getLessonObjectives(selectedLesson).map((objective, index) => (
              <li key={index} className={`${darkMode ? 'text-gray-300' : 'text-[#386641]'}`}>• {objective}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#386641]'}`}>Lesson Selection</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-[#A7C957]'} transition-colors`}
            >
              {darkMode ? <Sun className="w-6 h-6 text-white" /> : <Moon className="w-6 h-6 text-[#386641]" />}
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {lessons.map((lesson) => (
              <button
                key={lesson}
                onClick={() => handleLessonClick(lesson)}
                className={`aspect-square flex items-center justify-center text-2xl font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  selectedLesson === lesson
                    ? darkMode ? 'bg-[#6A994E] text-white' : 'bg-[#386641] text-white'
                    : darkMode ? 'bg-gray-700 text-white hover:bg-[#558B2F]' : 'bg-[#A7C957] text-white hover:bg-[#6A994E]'
                }`}
              >
                {lesson}
              </button>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-[#386641]'}`}>
              {selectedLesson
                ? `You've selected Lesson ${selectedLesson}. Ready to begin?`
                : 'Please select a lesson to continue.'}
            </p>
            <button
              onClick={handleStartLesson}
              disabled={!selectedLesson}
              className={`py-3 px-6 rounded-full text-lg font-semibold inline-flex items-center transition-all duration-300 ${
                selectedLesson
                  ? darkMode 
                    ? 'bg-[#BC4749] text-white hover:bg-[#a93e40]' 
                    : 'bg-[#A7C957] text-white hover:bg-[#6A994E]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Start Lesson
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonSelectionScreen;