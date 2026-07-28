import React from 'react';

/** Etiqueta/label pequena. variant: neutral|primary|accent|success|warning|danger|outline */
export function Tag({ variant = 'neutral', icon = null, className = '', children, ...rest }) {
  return (
    <span className={['av-tag', `av-tag--${variant}`, className].filter(Boolean).join(' ')} {...rest}>
      {icon}{children}
    </span>
  );
}
