import { useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState('Home');

  const tabs = [
    { id: 'Home', content: 'Welcome to the Home tab!' },
    { id: 'About', content: 'This is the About tab.' },
    { id: 'Contact', content: 'Contact us here.' },
  ];

  return (
    <div>
      <div>
        {tabs.map((tab) => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)}>
            {tab.id}
          </button>
        ))}
      </div>
      <div>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}

export default Tabs;