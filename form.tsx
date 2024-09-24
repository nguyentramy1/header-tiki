import React, { useState } from 'react';

interface FormProps {
  onSubmit: (name: string) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name) {
      onSubmit(name);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button 
        type="submit" 
        style={{
          background: name ? '#009AE3' : '#F5F5F5',
          color: name ? 'white' : '#ADADAD',     
          cursor: name ? 'pointer' : 'not-allowed', 
        }}
        disabled={!name} 
      >
        OK
      </button>
    </form>
  );
}

export default Form;
