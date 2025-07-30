import React from 'react';
import { LucideIcon } from 'lucide-react';

interface PixelButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'gold' | 'redstone';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  disabled?: boolean;
  className?: string;
}

const PixelButton: React.FC<PixelButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  disabled = false,
  className = '',
}) => {
  const baseClasses = 'font-pixel transition-all duration-100 border-2 flex items-center justify-center space-x-2';
  
  const variantClasses = {
    primary: 'minecraft-button text-white border-minecraft-dirt-darker',
    secondary: 'stone-block text-white border-minecraft-stone-darker',
    gold: 'gold-block text-minecraft-dirt-darker border-minecraft-gold-darker',
    redstone: 'bg-minecraft-redstone text-white border-red-800 hover:animate-redstone-glow',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1 text-xs-pixel',
    md: 'px-4 py-2 text-sm-pixel',
    lg: 'px-6 py-3 text-base-pixel',
  };
  
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed transform-none shadow-none' 
    : 'hover:transform hover:translate-x-1 hover:translate-y-1 active:transform active:translate-x-2 active:translate-y-2';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabledClasses}
        ${className}
      `}
    >
      {Icon && <Icon size={size === 'sm' ? 12 : size === 'md' ? 16 : 20} className="pixelated" />}
      <span>{children}</span>
    </button>
  );
};

export default PixelButton;