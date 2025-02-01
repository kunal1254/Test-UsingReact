import { useState } from 'react';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'What is React Router?', answer: 'React Router is a library for routing in React applications.' },
    { question: 'What is Vite?', answer: 'Vite is a build tool for modern web development.' },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button onClick={() => toggleAccordion(index)}>
            {item.question}
          </button>
          {activeIndex === index && <div>{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;