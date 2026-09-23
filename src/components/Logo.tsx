import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'mark-only';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const LOGO_IMAGE_PATH = '/images/logo-header.png';
export const LOGO_FALLBACK_URL = 'https://i.ibb.co/HTSmCCMk/119f16ef-59e3-4d19-b57b-37a2f188e750.png';

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-10 sm:h-11',
    md: 'h-13 sm:h-15 lg:h-16',
    lg: 'h-16 sm:h-20',
    xl: 'h-20 sm:h-24',
  }[size];

  if (variant === 'mark-only') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src="/favicon.svg"
          alt="Be Blessed Services Emblem"
          className={`${sizeClasses} w-auto object-contain`}
          width="48"
          height="48"
        />
      </div>
    );
  }

  // If dark background (e.g. footer), frame with a clean white rounded card
  if (variant === 'dark') {
    return (
      <div className={`inline-flex items-center p-2 rounded-xl bg-white shadow-xs select-none ${className}`}>
        <img
          src={LOGO_IMAGE_PATH}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = LOGO_FALLBACK_URL;
          }}
          alt="BE BLESSED SERVICES - Serving with Purpose"
          className={`${sizeClasses} w-auto object-contain`}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Light variant (Header & white backgrounds)
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={LOGO_IMAGE_PATH}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = LOGO_FALLBACK_URL;
        }}
        alt="BE BLESSED SERVICES - Serving with Purpose"
        className={`${sizeClasses} w-auto object-contain transition-transform duration-200 hover:scale-[1.01]`}
        loading="eager"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

