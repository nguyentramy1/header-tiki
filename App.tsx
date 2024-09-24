import React, { useState } from 'react';
import './App.scss';
import Button from './Button.tsx';
import Form from './form.tsx'; 

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleFormSubmit = (name: string) => {
    console.log(`Name submitted: ${name}`);
    setShowForm(false); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button 
          content="Click Me" 
          onClick={() => setShowForm(true)} 
        />
        <Button 
          content={<img src="/icon-button/icons.png" alt="Icon" />}
          onClick={() => console.log('punch in your face!')} 
        />
        {showForm && <Form onSubmit={handleFormSubmit} />}
      </header>
    </div>
  );
}

export default App;
