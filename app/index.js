import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [tag, setTag] = useState('');
  const [creationDate, setCreationDate] = useState('');

  const handleInputChange = (event) => {
    setTag(event.target.value);
  };

  const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      await getCreationDate(tag);
    }      
  }

  const getCreationDate = async (tag) => {
    const response = await fetch(`/tag/${tag}`);
    if (response.status >= 400) {
      setCreationDate('Tag does not exist');
    } else {
      const data = await response.json();
      setCreationDate(data.created_at);
    }
  }

  return (
    <div>
      <input type='text' 
        placeholder='Search for a tag in the blockapps/strato-getting-started repo' 
        value={tag}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button onClick={() => getCreationDate(tag)}>Get Tag Creation Date</button>
      <h2>Creation date: {creationDate}</h2>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
