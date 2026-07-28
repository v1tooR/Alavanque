import React from 'react';

/**
 * Botão de ação Alavanque.
 * variant: 'primary' (azul) | 'accent' (laranja/CTA) | 'secondary' | 'ghost' | 'danger'
 */
export function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  icon = null,
  iconRight = null,
  type = 'button',
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'av-btn',
    `av-btn--${variant}`,
    size === 'sm' && 'av-btn--sm',
    size === 'lg' && 'av-btn--lg',
    block && 'av-btn--block',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button type={type} className={classes} disabled={disabled} {...rest}>
      {icon}
      {children && <span>{children}</span>}
      {iconRight}
    </button>
  );
}
