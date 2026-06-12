import React from "react";

export const ROS2Icon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    {/* Inner Core */}
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
    {/* Outer Nodes */}
    <circle cx="12" cy="4" r="2" fill="currentColor" />
    <circle cx="12" cy="20" r="2" fill="currentColor" />
    <circle cx="4" cy="12" r="2" fill="currentColor" />
    <circle cx="20" cy="12" r="2" fill="currentColor" />
    
    {/* Diagonals */}
    <circle cx="6.34" cy="6.34" r="1.5" fill="currentColor" />
    <circle cx="17.66" cy="17.66" r="1.5" fill="currentColor" />
    <circle cx="6.34" cy="17.66" r="1.5" fill="currentColor" />
    <circle cx="17.66" cy="6.34" r="1.5" fill="currentColor" />

    {/* Connecting Lines */}
    <line x1="12" y1="6" x2="12" y2="8.5" />
    <line x1="12" y1="15.5" x2="12" y2="18" />
    <line x1="6" y1="12" x2="8.5" y2="12" />
    <line x1="15.5" y1="12" x2="18" y2="12" />
    
    {/* Diagonal Connecting Lines */}
    <line x1="8" y1="8" x2="9.5" y2="9.5" />
    <line x1="14.5" y1="14.5" x2="16" y2="16" />
    <line x1="8" y1="16" x2="9.5" y2="14.5" />
    <line x1="14.5" y1="9.5" x2="16" y2="8" />
  </svg>
);

export const CppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    {/* Hexagon */}
    <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" stroke="currentColor" strokeWidth="1.5" />
    {/* Stylized 'C++' inside */}
    <path d="M8 10 A2 2 0 0 0 8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 12 H10" stroke="currentColor" strokeWidth="1.5" />
    
    {/* Plus 1 */}
    <path d="M13 12 H16 M14.5 10.5 V13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* Plus 2 */}
    <path d="M18 12 H21 M19.5 10.5 V13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const PythonIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.002 2c-2.71 0-2.54 1.176-2.54 1.176v1.4h2.58v.37H8.46c-2.02 0-3.52 1.48-3.52 3.52v2.79H6.43v-2.02c0-1.12.87-2.02 2.02-2.02h4.55c1.12 0 2.02-.9 2.02-2.02V5.176S15.15 2 12.002 2zM9.9 3.5c.34 0 .62.28.62.62s-.28.62-.62.62a.62.62 0 0 1-.62-.62c0-.34.28-.62.62-.62zm2.1 18.5c2.71 0 2.54-1.176 2.54-1.176v-1.4h-2.58v-.37h3.58c2.02 0 3.52-1.48 3.52-3.52v-2.79h-1.49v2.02c0 1.12-.87 2.02-2.02 2.02H11.02c-1.12 0-2.02.9-2.02 2.02v2.046s-.13 3.176 3.018 3.176zm2.102-1.5a.62.62 0 0 1-.62.62c-.34 0-.62-.28-.62-.62a.62.62 0 0 1 .62-.62c.34 0 .62.28.62.62z" />
  </svg>
);

export const LinuxIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {/* Stylized Penguin / Chip hybrid representing Embedded Linux */}
    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
    <path d="M12 7c-1.5 0-3 1-3 3 0 1 .5 2 1.5 2.5-.5.5-1 1-1 2 0 1.5 1.1 2.5 2.5 2.5s2.5-1 2.5-2.5c0-1-.5-1.5-1-2 1-.5 1.5-1.5 1.5-2.5 0-2-1.5-3-3-3z" strokeWidth="1.5" />
    <path d="M9 10h.01 M15 10h.01 M11 12h2" />
    <path d="M1 9h2 M1 15h2 M21 9h2 M21 15h2 M9 1v2 M15 1v2 M9 21v2 M15 21v2" strokeWidth="1.5" />
  </svg>
);

export const DockerIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.983 11.078h2.119v-2.006h-2.119v2.006zm-2.737 0h2.119v-2.006h-2.119v2.006zm-2.737 0h2.12v-2.006h-2.12v2.006zm-2.737 0h2.119v-2.006H5.772v2.006zm2.737-2.31h2.119V6.762H8.509v2.006zm2.737 0h2.119V6.762h-2.119v2.006zm0-2.31h2.119V4.452h-2.119v2.006zm2.737 2.31h2.119V6.762h-2.119v2.006zm-8.21 6.93h2.119v-2.006H5.772v2.006zm15.422-5.714c-.066-.017-.4-.102-.857-.043-.284-.668-.838-1.127-1.498-1.282-.55-.13-1.11-.065-1.579.167-.282-.473-.785-.826-1.393-.974-.328-.08-.689-.093-1.042-.047V15.75c.196.009.389.02.585.02 4.148 0 7.51-2.918 7.93-6.66-.008-.01-.018-.024-.035-.034zM0 11.53c.007.411.045.818.117 1.22.569 3.167 3.3 5.578 6.55 5.578h10.126c.404 0 .802-.036 1.19-.1-1.077 1.547-2.868 2.57-4.908 2.57H5.2c-3.13 0-5.71-2.182-6.388-5.094C-.43 14.39-.028 12.87 0 11.53z" />
  </svg>
);

export const KubernetesIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M11.66 0a1.66 1.66 0 0 0-.96.3l-8 5.76a1.66 1.66 0 0 0-.58 1.83l3.05 9.4a1.66 1.66 0 0 0 1.58 1.15h9.88a1.66 1.66 0 0 0 1.58-1.15l3.05-9.4a1.66 1.66 0 0 0-.58-1.83l-8-5.76a1.66 1.66 0 0 0-.96-.3zm.34 2.82l6.23 4.48-2.38 7.32H8.15L5.77 7.32 12 2.82zm0 3.32c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" />
  </svg>
);

export const ReactIcon = (props) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1" {...props}>
    <circle r="2.05" fill="currentColor" stroke="none" />
    <ellipse rx="11" ry="4.2" />
    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
  </svg>
);

export const TypeScriptIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M0 0h24v24H0V0zm22.427 17.513c-.11-.73-.55-1.33-1.46-1.74-.75-.35-1.72-.62-2.91-.82-.8-.13-1.17-.35-1.17-.83 0-.45.42-.72 1.12-.72.82 0 1.35.33 1.57.96h2.2c-.17-1.63-1.32-2.57-3.4-2.57-2.18 0-3.52 1.13-3.52 2.78 0 1.58 1.13 2.37 3.2 2.72 1.22.2 2 .43 2.3.73.35.33.47.77.47 1.25 0 .7-.57 1.15-1.65 1.15-1.28 0-1.95-.57-2.17-1.57h-2.25c.18 2.05 1.57 3.1 4.17 3.1 2.52 0 3.96-1.18 3.96-3.1 0-1.33-.67-2.1-2.45-2.48zM10.97 12.5h-8v2h2.83v7.35h2.33v-7.35h2.84v-2z" />
  </svg>
);

export const NodejsIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M9.13 18.06h.02l4.14-2.4v-4.8L9.15 8.46l-4.14 2.4v4.8l4.12 2.4z M9.13 9.66L4.99 7.26l4.14-2.4 4.14 2.4-4.14 2.4z" />
  </svg>
);

export const MongodbIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C7.7 0 6.6 4.7 6.6 7.4c0 4 2.8 7.3 5.4 10.9v4.2c0 .8.6 1.5 1.4 1.5s1.4-.7 1.4-1.5v-4.2c2.6-3.6 5.4-6.9 5.4-10.9C20.2 4.7 19.1 0 14.8 0H12zm2.1 14.7c-.5.7-1.3 1.4-2.1 2.2-.8-.8-1.6-1.5-2.1-2.2-1.3-1.8-2.6-3.6-2.6-5.3 0-1.7.5-5.6 2.6-6.6.6.6 1.4 2 2.1 3.5.7-1.5 1.5-2.9 2.1-3.5 2.1 1 2.6 4.9 2.6 6.6 0 1.7-1.3 3.5-2.6 5.3z" />
  </svg>
);

export const TailwindIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
  </svg>
);

export const GitIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.236 10.764L13.236.764c-.75-.75-1.97-.75-2.72 0l-2.07 2.07 3.32 3.32c.74-.24 1.59-.06 2.19.54.61.61.79 1.47.53 2.21l3.3 3.3c.74-.26 1.6-.08 2.21.53.86.86.86 2.24 0 3.1-.86.86-2.24.86-3.1 0-.6-.6-.79-1.46-.54-2.19l-3.32-3.32c-.74.26-1.6.08-2.21-.53-.61-.61-.79-1.47-.53-2.21l-3.32-3.32-5.46 5.46c-.75.75-.75 1.97 0 2.72l10 10c.75.75 1.97.75 2.72 0l10-10c.75-.75.75-1.97 0-2.72z" />
  </svg>
);

export const WebSocketIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2v20 M17 5l-5-5-5 5 M7 19l5 5 5-5" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3" fill="#050505" strokeWidth="1.5" />
    <path d="M12 10.5v3" strokeWidth="1" />
  </svg>
);

export const ThreejsIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="2" y1="8.5" x2="22" y2="15.5" />
    <line x1="2" y1="15.5" x2="22" y2="8.5" />
  </svg>
);
