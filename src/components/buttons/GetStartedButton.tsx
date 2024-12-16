import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GetStartedButtonProps {
  className?: string;
  fullWidth?: boolean;
}

export default function GetStartedButton({ className = '', fullWidth = false }: GetStartedButtonProps) {
  const handleClick = () => {
    window.open('https://docs.google.com/forms/d/1bAlfqFgiclXo9EAQEHF03nhMiCwt9w1YQM06cfRe70c/edit', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${fullWidth ? 'w-full text-left' : ''} ${className}`}
    >
      Get Started <ArrowRight className="ml-2 h-5 w-5" />
    </button>
  );
}