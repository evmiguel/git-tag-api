import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import styled from '@emotion/styled'

const Button = styled.button`
  background-color: #008CBA; 
  color: white; 
  border: 2px solid #008CBA;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer
`;

const Input = styled.input`
  padding: 10px;
  width: 50%;
  margin-right: 5px;
`

const Heading = styled.h2`
  font-family: Arial;
  color: gray;
`;

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
      setCreationDate(new Date(data.created_at).toLocaleDateString());
    }
  }

  return (
    <div>
      <Input type='text' 
        placeholder='Search for a tag in the blockapps/strato-getting-started repository' 
        value={tag}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <Button onClick={() => getCreationDate(tag)}>Get Tag Creation Date</Button>
      <Heading>Creation date: {creationDate}</Heading>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
