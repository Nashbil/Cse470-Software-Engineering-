import React, { useState } from 'react';

const InputForm = ({ addItem }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addItem(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter an item"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default InputForm;
