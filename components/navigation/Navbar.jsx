import React from 'react';

/** Barra de navegação superior. brand à esquerda, links no meio, ações à direita. */
export function Navbar({ brand, links = [], actions = null, className = '', ...rest }) {
  return (
    <nav className={['av-nav', className].filter(Boolean).join(' ')} {...rest}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
        {brand}
      </div>
      {links.length > 0 && (
        <ul className="av-nav__links">
          {links.map((l, i) => (
            <li key={i}>
              <a className={['av-nav__link', l.active && 'av-nav__link--active'].filter(Boolean).join(' ')} href={l.href || '#'}>{l.label}</a>
            </li>
          ))}
        </ul>
      )}
      {actions && <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>{actions}</div>}
    </nav>
  );
}
