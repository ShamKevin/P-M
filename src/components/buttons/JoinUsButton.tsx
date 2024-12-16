import React from 'react';
import { ArrowRight } from 'lucide-react';

interface JoinUsButtonProps {
  className?: string;
  fullWidth?: boolean;
}

export default function JoinUsButton({ className = '', fullWidth = false }: JoinUsButtonProps) {
  const handleClick = () => {
    window.open('https://forms.gle/fufxPhDMgKQKqFjc9', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${fullWidth ? 'w-full text-left' : ''} ${className}`}
    >
      Join Us <ArrowRight className="ml-2 h-5 w-5" />
    </button>
  );
}