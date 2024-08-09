import React from 'react';
import logo from './capXlogo.webp'
const QuestionCard = ({ question, onNext }) => {
  const handleButtonClick = () => {
    onNext();
  };

  return (
    <div>
        <div className=''>
        <img src={logo} className='absolute my-5 inset-0 mx-auto' alt="CapX" />
        </div>
        <div className="bg-black p-8 rounded-lg shadow-lg my-36 mx-10">
            {/* the "question" refers to const created in app.js  */}
      <h2 className="text-9xl text-white font-semibold text-left mb-6">{question.text}</h2>
      <div className="flex flex-wrap my-20 justify-around">
        {question.options.map((option, index) => (
          <button 
            key={index} 
            onClick={handleButtonClick} 
            // the color is taken from specified in App.js
            className={`${option.color} px-6 py-2 m-1 hover:scale-110 w-1/3 lg:w-1/4 h-20 rounded-3xl font-semibold`}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default QuestionCard;
