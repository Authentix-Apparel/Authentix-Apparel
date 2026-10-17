import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark'; // 'light' is for dark backgrounds (footer), 'dark' is for light backgrounds (header)
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = ''
}) => {
  // Sizing definitions
  const iconSizeClass = {
    sm: 'w-7 h-7 sm:w-8 sm:h-8',
    md: 'w-8 h-8 sm:w-9 sm:h-9',
    lg: 'w-10 h-10 sm:w-11 sm:h-11'
  }[size];

  const brandTextSize = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-2xl',
    lg: 'text-2xl sm:text-3xl'
  }[size];

  const subtitleTextSize = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[10px] sm:text-[11px] tracking-[0.25em]',
    lg: 'text-xs tracking-[0.3em]'
  }[size];

  const isLight = variant === 'light'; // dark background, light text
  const rawId = React.useId().replace(/:/g, '');
  const gradId = `brandPinkGrad-${rawId}`;
  const glowId = `pinkGlow-${rawId}`;

  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 select-none ${className}`}>
      {/* Iconic Pink Brand Mark Emblem (#FF46A2) */}
      <div className={`relative ${iconSizeClass} shrink-0 flex items-center justify-center drop-shadow-xs`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Subtle gradient from #FF62B2 to brand #FF46A2 and deep #E02A88 */}
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF62B2" />
              <stop offset="45%" stopColor="#FF46A2" />
              <stop offset="100%" stopColor="#E02A88" />
            </linearGradient>
            <filter id={glowId} x1="-10%" y1="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#FF46A2" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Rounded Squircle Badge in brand color #FF46A2 */}
          <rect
            width="40"
            height="40"
            rx="11"
            fill={`url(#${gradId})`}
            filter={`url(#${glowId})`}
          />

          {/* Delicate border highlight */}
          <rect
            x="0.75"
            y="0.75"
            width="38.5"
            height="38.5"
            rx="10.25"
            stroke="white"
            strokeOpacity="0.25"
            strokeWidth="1.5"
          />

          {/* Iconic High-Fashion 'A' Monogram with Diamond Apex Cut */}
          <path
            d="M20 7L8.5 33H13.8L16.2 27.2H23.8L26.2 33H31.5L20 7ZM19.2 12.8C19.5 12 20.5 12 20.8 12.8L22.6 22.8H17.4L19.2 12.8Z"
            fill="white"
          />

          {/* Signature Apparel Diamond Accent */}
          <path
            d="M20 18.5L21.2 19.8L20 21.1L18.8 19.8L20 18.5Z"
            fill="#FF46A2"
          />
        </svg>
      </div>

      {/* Brand Typography Wordmark */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center">
          <span
            className={`font-bold tracking-tight uppercase font-display ${brandTextSize} ${
              isLight ? 'text-white' : 'text-stone-900'
            }`}
          >
            AUTHENTI<span className="text-[#FF46A2]">X</span>
          </span>
        </div>

        {showSubtitle && (
          <span
            className={`font-semibold uppercase pt-0.5 ${subtitleTextSize} ${
              isLight ? 'text-rose-300' : 'text-rose-600'
            }`}
          >
            APPAREL
          </span>
        )}
      </div>
    </div>
  );
};
