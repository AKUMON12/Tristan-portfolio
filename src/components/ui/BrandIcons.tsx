'use client';

import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * High-quality vector SVG Brand Icons and Tech Symbols
 * Used across the Infinite Marquee, Tools Used Matrix, and Project Showcases
 */

export const ReactIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg
    viewBox="-11.5 -10.23174 23 20.46348"
    className={className}
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const NextJsIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 180 180" className={className} width={size} height={size} fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0ZM138.809 130.404L80.999 55H66V124.938H77.9375V69.7578L130.344 137.957C133.278 135.617 136.113 133.085 138.809 130.404ZM114.188 124.938H126.125V55H114.188V124.938Z"
    />
  </svg>
);

export const TypeScriptIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <rect width="128" height="128" rx="16" fill="#3178C6" />
    <path
      d="M1.5 64C1.5 29.48 29.48 1.5 64 1.5C98.52 1.5 126.5 29.48 126.5 64C126.5 98.52 98.52 126.5 64 126.5C29.48 126.5 1.5 98.52 1.5 64Z"
      fill="#3178C6"
    />
    <path
      d="M71.2 59.4H83.8V106H97.7V59.4H110.3V48H71.2V59.4ZM58.7 60.1C55.4 58.2 50.8 56.7 44.8 56.7C34.7 56.7 29.1 61.8 29.1 69.3C29.1 76.6 34.3 80.8 42.8 84.1L46.8 85.7C52.2 87.8 54.8 90.1 54.8 93.6C54.8 98.1 50.9 101.4 43.1 101.4C36.4 101.4 30.6 98.9 26.6 96.1L23 106.6C27.9 110 35.8 112.5 44.2 112.5C57.4 112.5 68 105.7 68 93.2C68 84.8 62.9 80.3 53.6 76.7L49.6 75.1C44.8 73.2 42.1 71.3 42.1 67.9C42.1 64.3 45.4 61.7 51.5 61.7C56.6 61.7 60.9 63.5 63.8 65.4L58.7 60.1Z"
      fill="#FFFFFF"
    />
  </svg>
);

export const NodeJsIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <path
      d="M64 4.5L115.5 34.2V93.8L64 123.5L12.5 93.8V34.2L64 4.5Z"
      fill="#539E43"
    />
    <path
      d="M64 8.5L17 35.5V92.5L64 119.5L111 92.5V35.5L64 8.5Z"
      fill="#68A063"
    />
    <path
      d="M74.5 48.5C70.5 45.5 64.5 45.5 64.5 45.5C64.5 45.5 56.5 45.5 56.5 54.5C56.5 63.5 68.5 64.5 73.5 68.5C78.5 72.5 77.5 81.5 73.5 85.5C69.5 89.5 60.5 89.5 53.5 86.5V74.5C57.5 77.5 64.5 78.5 66.5 76.5C68.5 74.5 67.5 70.5 64.5 68.5C61.5 66.5 50.5 65.5 49.5 56.5C48.5 47.5 54.5 40.5 63.5 39.5C72.5 38.5 76.5 43.5 76.5 43.5L74.5 48.5Z"
      fill="#FFFFFF"
    />
  </svg>
);

export const TailwindIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
    <path
      d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
      fill="#38BDF8"
    />
  </svg>
);

export const PostgresIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <path
      d="M64 4C30.9 4 4 30.9 4 64s26.9 60 60 60 60-26.9 60-60S97.1 4 64 4z"
      fill="#336791"
    />
    <path
      d="M64 24c-17 0-31 13.5-31 30.5 0 8.5 3.5 16 9.5 21.5-2.5 7.5-8.5 12.5-8.5 12.5s9.5 0 17.5-6.5c3.8 1.6 8 2.5 12.5 2.5 17 0 31-13.5 31-30.5S81 24 64 24zm0 46c-9.4 0-17-7.2-17-16s7.6-16 17-16 17 7.2 17 16-7.6 16-17 16z"
      fill="#FFFFFF"
    />
  </svg>
);

export const SupabaseIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
    <path
      d="M21.362 9.354H12V.5L2.638 14.646H12v8.854l9.362-14.146z"
      fill="#3ECF8E"
    />
  </svg>
);

export const ExpressIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <rect width="128" height="128" rx="24" fill="#1E293B" />
    <text
      x="64"
      y="76"
      fill="#FFFFFF"
      fontFamily="monospace"
      fontSize="46"
      fontWeight="900"
      textAnchor="middle"
    >
      ex
    </text>
  </svg>
);

export const NuxtIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 24 24" className={className} width={size} height={size} fill="none">
    <path
      d="M10.8 17.5H2.5L9.2 6.1c.3-.5.9-.9 1.6-.9.6 0 1.2.3 1.6.9l2.4 4.1-2.4 4.1c-.4.7-1 1.2-1.6 1.2z"
      fill="#00DC82"
    />
    <path
      d="M14.8 17.5h6.7L16.2 8.7c-.3-.5-.9-.9-1.6-.9-.4 0-.8.2-1.1.5l3.7 6.3c.3.5.5 1.1.5 1.7 0 .4-.2.8-.5 1.2h-2.4z"
      fill="#00DC82"
      opacity="0.8"
    />
  </svg>
);

export const MySqlIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <circle cx="64" cy="64" r="60" fill="#00758F" />
    <path
      d="M40 76c5-2 15-4 24-2 10 2 18 10 24 16-6-24-2-42 6-50-14 2-26 14-30 24-4 10-10 12-24 12z"
      fill="#F29111"
    />
  </svg>
);

export const FigmaIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 38 57" className={className} width={size} height={size} fill="none">
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
  </svg>
);

export const CanvaIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <circle cx="64" cy="64" r="60" fill="#00C4CC" />
    <path
      d="M74 44c-12 0-22 10-22 22 0 14 12 24 24 24 8 0 14-4 18-10l-6-4c-3 4-7 6-12 6-9 0-16-7-16-16 0-8 6-14 14-14 6 0 10 3 13 8l6-4c-4-7-11-12-19-12z"
      fill="#FFFFFF"
    />
  </svg>
);

export const AdobePsIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <rect width="128" height="128" rx="24" fill="#001E36" />
    <text
      x="40"
      y="78"
      fill="#31A8FF"
      fontFamily="sans-serif"
      fontSize="44"
      fontWeight="900"
    >
      P
    </text>
    <text
      x="70"
      y="78"
      fill="#31A8FF"
      fontFamily="sans-serif"
      fontSize="44"
      fontWeight="900"
    >
      s
    </text>
  </svg>
);

export const AdobeExpressIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <rect width="128" height="128" rx="24" fill="#EB1000" />
    <path
      d="M42 92L64 36l22 56h-14l-8-22h-8v22H42zm16-34h8l-4-12-4 12z"
      fill="#FFFFFF"
    />
  </svg>
);

export const CapCutIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <rect width="128" height="128" rx="24" fill="#000000" stroke="#334155" strokeWidth="2" />
    <path
      d="M34 44h30l16 20-16 20H34l16-20-16-20zm30 0h30l-16 20 16 20H64l16-20-16-20z"
      fill="#FFFFFF"
    />
  </svg>
);

export const VsCodeIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <path
      d="M96.6 6.8L68.4 34.6 44.5 16.2 33 21.6v84.8l11.5 5.4 23.9-18.4 28.2 27.8 18.4-9.2V16l-18.4-9.2zm-2.4 83.2L55.8 64l38.4-26v52z"
      fill="#007ACC"
    />
  </svg>
);

export const CursorIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <rect width="128" height="128" rx="24" fill="#0E131F" stroke="#00F0FF" strokeWidth="2" />
    <path
      d="M38 34l54 30-26 6-12 24-16-60z"
      fill="#00F0FF"
    />
  </svg>
);

export const NetBeansIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <circle cx="64" cy="64" r="58" fill="#1B6AC6" />
    <path
      d="M40 38l24-14 24 14v52l-24 14-24-14V38z"
      fill="#FFFFFF"
      opacity="0.9"
    />
    <path
      d="M64 24l24 14-24 14-24-14 24-14zm0 28l24-14v52L64 104V52z"
      fill="#A4C2F4"
    />
  </svg>
);

export const AntigravityIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <rect width="128" height="128" rx="24" fill="#0A0D14" stroke="#8B5CF6" strokeWidth="2" />
    <circle cx="64" cy="64" r="32" stroke="#00F0FF" strokeWidth="4" fill="none" />
    <path
      d="M64 28v72M28 64h72M40 40l48 48M88 40L40 88"
      stroke="#8B5CF6"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="64" cy="64" r="8" fill="#00F0FF" />
  </svg>
);

export const GoogleStitchIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <rect width="128" height="128" rx="24" fill="#4285F4" />
    <path
      d="M44 44h40v40H44z"
      stroke="#FFFFFF"
      strokeWidth="8"
      strokeDasharray="12 6"
      fill="none"
    />
    <circle cx="64" cy="64" r="10" fill="#FBBC05" />
  </svg>
);

export const ArduinoIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <path
      d="M42 38c-14.4 0-26 11.6-26 26s11.6 26 26 26c9.4 0 17.6-5 22-12.4 4.4 7.4 12.6 12.4 22 12.4 14.4 0 26-11.6 26-26s-11.6-26-26-26c-9.4 0-17.6 5-22 12.4-4.4-7.4-12.6-12.4-22-12.4zm-8 23h16v6H34v-6zm50 0h6v-6h6v6h6v6h-6v6h-6v-6h-6v-6z"
      fill="#00979D"
    />
  </svg>
);

export const TinkercadIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <rect width="128" height="128" rx="24" fill="#0072CE" />
    <rect x="34" y="34" width="26" height="26" rx="4" fill="#00A88F" />
    <rect x="68" y="34" width="26" height="26" rx="4" fill="#F4B223" />
    <rect x="34" y="68" width="26" height="26" rx="4" fill="#EB3C00" />
    <rect x="68" y="68" width="26" height="26" rx="4" fill="#0072CE" stroke="#FFFFFF" strokeWidth="2" />
  </svg>
);

export const CiscoIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <rect width="128" height="128" rx="24" fill="#049FD9" />
    <g fill="#FFFFFF">
      <rect x="24" y="58" width="8" height="24" rx="4" />
      <rect x="38" y="44" width="8" height="38" rx="4" />
      <rect x="52" y="32" width="8" height="50" rx="4" />
      <rect x="68" y="32" width="8" height="50" rx="4" />
      <rect x="82" y="44" width="8" height="38" rx="4" />
      <rect x="96" y="58" width="8" height="24" rx="4" />
    </g>
  </svg>
);

export const GeminiIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <defs>
      <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1BA1E3" />
        <stop offset="50%" stopColor="#5B69FF" />
        <stop offset="100%" stopColor="#9C44F7" />
      </linearGradient>
    </defs>
    <path
      d="M64 4C64 37.1 37.1 64 4 64c33.1 0 60 26.9 60 60 0-33.1 26.9-60 60-60-33.1 0-60-26.9-60-60z"
      fill="url(#geminiGrad)"
    />
  </svg>
);

export const OpenAiIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <circle cx="64" cy="64" r="60" fill="#10A37F" />
    <path
      d="M89.5 56.4c-.7-5.5-4.5-9.8-9.8-11.2l-3.3 2c.5.3 1 .6 1.4 1 3.5 2.5 5 7.1 3.7 11.2l6.2 3.6c.7-2.1 1.3-4.3 1.8-6.6zm-17-26.8c-4.4-3.5-10.4-4-15.3-1.2l1.6 3.6c.4-.2.8-.5 1.3-.7 4.1-1.3 8.6.2 11.2 3.7l6.5-3.8c-1.6-1.6-3.4-2.9-5.3-4zM42.2 40.5c-4.4 3.4-6.4 9.1-5.1 14.5l3.8-1.5c-.2-.5-.3-1-.4-1.5-.7-4.2 1.6-8.4 5.6-10.3l-3.9-6.3zm-7.7 31.1c.7 5.5 4.5 9.8 9.8 11.2l3.3-2c-.5-.3-1-.6-1.4-1-3.5-2.5-5-7.1-3.7-11.2l-6.2-3.6c-.7 2.1-1.3 4.3-1.8 6.6zm17 26.8c4.4 3.5 10.4 4 15.3 1.2l-1.6-3.6c-.4.2-.8.5-1.3.7-4.1 1.3-8.6-.2-11.2-3.7l-6.5 3.8c1.6 1.6 3.4 2.9 5.3 4zm30.3-13.7c4.4-3.4 6.4-9.1 5.1-14.5l-3.8 1.5c.2.5.3 1 .4 1.5.7 4.2-1.6 8.4-5.6 10.3l3.9 6.3z"
      fill="#FFFFFF"
    />
  </svg>
);

export const MsOfficeIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <rect width="128" height="128" rx="24" fill="#D83B01" />
    <path
      d="M38 32h52v64H38z"
      fill="#FFFFFF"
      opacity="0.9"
    />
    <path
      d="M30 40h42v48H30z"
      fill="#FF8C00"
    />
    <text
      x="51"
      y="72"
      fill="#FFFFFF"
      fontFamily="sans-serif"
      fontSize="32"
      fontWeight="bold"
      textAnchor="middle"
    >
      O
    </text>
  </svg>
);

export const MsPptIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <rect width="128" height="128" rx="24" fill="#D24726" />
    <path
      d="M58 38h38v52H58z"
      fill="#FFFFFF"
      opacity="0.9"
    />
    <rect x="32" y="44" width="40" height="40" rx="6" fill="#B73618" />
    <text
      x="52"
      y="72"
      fill="#FFFFFF"
      fontFamily="sans-serif"
      fontSize="26"
      fontWeight="900"
      textAnchor="middle"
    >
      P
    </text>
  </svg>
);

export const MsExcelIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <rect width="128" height="128" rx="24" fill="#107C41" />
    <path
      d="M58 38h38v52H58z"
      fill="#FFFFFF"
      opacity="0.9"
    />
    <rect x="32" y="44" width="40" height="40" rx="6" fill="#0E5C2F" />
    <text
      x="52"
      y="72"
      fill="#FFFFFF"
      fontFamily="sans-serif"
      fontSize="26"
      fontWeight="900"
      textAnchor="middle"
    >
      X
    </text>
  </svg>
);

export const RailwayIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <rect width="128" height="128" rx="24" fill="#0B0D0E" stroke="#7C3AED" strokeWidth="2" />
    <path
      d="M34 40h60v16H34zm0 24h60v16H34zm0 24h60v8H34z"
      fill="#A855F7"
    />
  </svg>
);

export const RenderIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <rect width="128" height="128" rx="24" fill="#1E1E1E" />
    <path
      d="M36 92V36h28c14 0 24 10 24 22 0 9-5 16-12 19l16 15H76L62 76H50v16H36zm14-30h14c6 0 10-4 10-8s-4-8-10-8H50v16z"
      fill="#46E3B7"
    />
  </svg>
);

export const VercelIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size} fill="currentColor">
    <path d="M64 16L124 112H4L64 16Z" />
  </svg>
);

export const DockerIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <path
      d="M120 62c-2.4-1.8-7.8-2.6-12-1.2-1-7-6.2-12.8-13.8-14.8-1.2-.4-2.6-.6-3.8-.6-1.4 0-2.8.2-4 .6 0 0-4.8-12.8-21.4-13.2-1.4 0-2.6.2-3.8.4v10.6H50V33.6H39v10.2H28V33.6H17v20.4H6v10.2h102c4.8 0 10.4-2.8 12-2.2zM28 64.2H17V54h11v10.2zm11 0H28V54h11v10.2zm11 0H39V54h11v10.2zm11 0H50V54h11v10.2zm11 0H61V54h11v10.2zm11 0H72V54h11v10.2zm11 0H83V54h11v10.2z"
      fill="#2496ED"
    />
    <path
      d="M107 72.8c-3.6 0-7.8 1.4-11.4 3.8-4.2-3-10-4.6-16.6-4.6-6.6 0-12.4 1.6-16.6 4.6-4.2-3-10-4.6-16.6-4.6-6.6 0-12.4 1.6-16.6 4.6C25.6 74.2 21.4 72.8 17.8 72.8 9.4 72.8 3.2 78 2 83.8c10.4 17.6 29.4 28.2 50 28.2 28.6 0 53.6-20.2 61-48.4-1.8.8-3.8 1.2-6 1.2z"
      fill="#2496ED"
    />
  </svg>
);

export const PythonIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <path
      d="M63.5 8C43.8 8 45 16.5 45 16.5l.02 8.8h18.7v2.6H27.5S15 26.5 15 46.2s10.9 19 10.9 19h6.5v-9.1c0-10.4 8.7-10.4 8.7-10.4h18.6c10.2 0 10.2-9.7 10.2-9.7V17.7S72.5 8 63.5 8zm-7.6 5.8a3.1 3.1 0 1 1 0 6.2 3.1 3.1 0 0 1 0-6.2z"
      fill="#387EB8"
    />
    <path
      d="M64.5 120c19.7 0 18.5-8.5 18.5-8.5l-.02-8.8H64.3V100h36.2s12.5 1.4 12.5-18.3-10.9-19-10.9-19h-6.5v9.1c0 10.4-8.7 10.4-8.7 10.4H48.3c-10.2 0-10.2 9.7-10.2 9.7v8.5S55.5 120 64.5 120zm7.6-5.8a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2z"
      fill="#FFE052"
    />
  </svg>
);

export const GitIcon: React.FC<IconProps> = ({ className = 'h-5 w-5', size }) => (
  <svg viewBox="0 0 128 128" className={className} width={size} height={size}>
    <path
      d="M123.5 56.5L71.5 4.5c-4.7-4.7-12.3-4.7-17 0L4.5 54.5c-4.7 4.7-4.7 12.3 0 17l52 52c4.7 4.7 12.3 4.7 17 0l50-50c4.7-4.7 4.7-12.3 0-17zM69.8 74.3v-17c-4.4-.7-9.4 1.1-12.8 4.5-5 5-5.6 12.6-1.8 18.1l-8.6 8.6c-4.6-2.5-7.7-7.2-7.7-12.7 0-6.4 4.2-12 10.2-13.9v-16c-6 1.9-10.2 7.5-10.2 13.9 0 3.2 1 6.2 2.8 8.6L24.4 85.7c-1.8-1.8-1.8-4.7 0-6.5l27-27c1.8-1.8 4.7-1.8 6.5 0l27 27c1.8 1.8 1.8 4.7 0 6.5l-8.6 8.6c2.4 1.8 5.4 2.8 8.6 2.8 7.9 0 14.3-6.4 14.3-14.3 0-5.5-3.1-10.2-7.7-12.7l-8.6 8.6c1.1 1.7 1.1 3.8 0 5.5-1.5 1.5-3.9 1.5-5.4 0-1.5-1.5-1.5-3.9 0-5.4z"
      fill="#F05032"
    />
  </svg>
);
