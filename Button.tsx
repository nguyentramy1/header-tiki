import React from 'react';

interface ButtonProps {
  content: React.ReactNode;
  onClick?: () => void; 
  className?: string;
  
}

const Button: React.FC<ButtonProps> = ({ content, onClick, className }) => {
  return (
    <button 
      className={`custom-button`} 
      onClick={onClick}     >
      <div className="custom-content">
        {content}
      </div>
    </button>
  );
}

export default Button;
