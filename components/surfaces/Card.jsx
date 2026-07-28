import React from 'react';

/** Card de conteúdo/produto. elevation: sm|md|lg. interactive adiciona hover de elevação. */
export function Card({
  elevation = 'sm',
  interactive = false,
  media = null,
  title,
  children,
  footer = null,
  className = '',
  ...rest
}) {
  return (
    <div className={['av-card', `av-card--${elevation}`, interactive && 'av-card--interactive', className].filter(Boolean).join(' ')} {...rest}>
      {media && <div className="av-card__media">{media}</div>}
      <div className="av-card__body">
        {title && <h3 className="av-card__title">{title}</h3>}
        {children && <div className="av-card__text">{children}</div>}
        {footer}
      </div>
    </div>
  );
}
