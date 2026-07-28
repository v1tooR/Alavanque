import React from 'react';

/** Contador/indicador. Use dot para um ponto sem número. */
export function Badge({ variant = 'accent', dot = false, className = '', children, ...rest }) {
  return (
    <span className={['av-badge', `av-badge--${variant}`, dot && 'av-badge--dot', className].filter(Boolean).join(' ')} {...rest}>
      {!dot && children}
    </span>
  );
}
