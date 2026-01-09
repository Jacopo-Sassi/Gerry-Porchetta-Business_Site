import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props // include type, onClick, disabled, ecc.
}: ButtonProps) {
  const baseStyles = 'font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white',
    secondary: 'bg-stone-100 hover:bg-stone-200 text-stone-800 border-2 border-stone-300'
  };

  const sizeStyles = {
    md: 'px-8 py-3 text-base',
    lg: 'px-12 py-4 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} rounded-full`}
      {...props} // passa tutti i props HTML standard
    >
      {children}
    </button>
  );
}
