import React, { useState } from 'react';
import Question from '../constant/question'

const FAQComponent = () => {

  const [ openIndex, setOpenIndex] = useState(0)
  
  const ToggleFaq = (index) => {
    // alert(index)
    setOpenIndex(index)
  }
  console.log(openIndex)
  return ( <div className="flex flex-col gap-6">
    {Question.map((question, index) => (
      <section className="border-b pb-4" key={index}>
        <div 
          className="flex items-center justify-between gap-3 cursor-pointer"
          onClick={() => ToggleFaq(index)}
        >
          <h2 className={`text-primary font-bold transition-colors duration-300 ${openIndex === index ? 'text-[#ad28ebf6]' : ''}`}>
            {question.quetion}
          </h2>
          <img 
            src="/icon-plus.svg" 
            alt="Toggle" 
            className={`transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
          />
        </div>
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-tertiary text-xs pt-2">
            {question.answer}
          </p>
        </div>
      </section>
    ))}
  </div>
  );
};

export default FAQComponent;