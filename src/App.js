import React, { useState, useEffect } from 'react';
import TitleScreen from './TitleScreen';
import QuestionCard from './QuestionComponent';
import './App.css'

// Created the Second Task 

// Questions asked in questionnaire
const questions = [
  // In order to have different color associated with buttons I have coded the background and text here and then used this in QuestionCOmponent.jsx
  {
    text: (
      <>
        Have you ever <span className="text-orange-500">engaged</span> in{' '}
        <span className="text-orange-500">high-frequency</span> trading strategies?
      </>
    ),
    options: [
      { text: 'Yes', color: 'bg-orange-500 text-black' },
      { text: 'No', color: 'bg-slate-500 text-white' }
    ]
  },
  {
    text: (
      <>
        Which of these <span className="text-orange-500">problems</span> has affected you the most?
      </>
    ),
    options: [
      { text: 'Market volatility', color: 'bg-orange-500 text-black' },
      { text: 'Liquidity issues', color: 'bg-slate-500 text-white' },
      { text: 'Regulatory risks', color: 'bg-slate-500 text-white' },
      { text: 'Knowledge Gap', color: 'bg-orange-500 text-black' },
    ]
  },
  {
    text: 'How often do you research trading strategies?',
    options: [
      { text: 'Daily', color: 'bg-orange-500 text-black' },
      { text: 'Weekly', color: 'bg-slate-500 text-white' },
      { text: 'Monthly', color: 'bg-slate-500 text-white' },
      { text: 'Rarely', color: 'bg-orange-500 text-black' }
    ]
  },
  {
    text: 
    <>
    Have you ever just refrained yourself from Trading just because of the <span className='text-orange-500'>Risk</span> ?
      </>,
    options: [
      { text: 'Yes', color: 'bg-orange-500 text-black' },
      { text: 'No', color: 'bg-slate-500 text-white' }
    ]
  }
];


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const completed = localStorage.getItem('questionsCompleted');
    if (completed) {
      setIsCompleted(true);
      // This will make sure even if we reload we can only attempt the questionnarie once 
    }
  }, []);

  // To Move to next question
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
      localStorage.setItem('questionsCompleted', 'true');
    }
  };

  // After Completion TitleScreen is showed
  if (isCompleted) {
    return <TitleScreen />;
  }

  return (
    <div className="flex bg-[#101115]">
      <QuestionCard 
        question={questions[currentQuestion]} 
        onNext={handleNext} 
      />
    </div>
  );
}

export default App;
