import React from 'react';

/** Abas controladas. Passe `tabs` [{id,label,content}]; estado interno se `value` não for fornecido. */
export function Tabs({ tabs = [], value, defaultValue, onChange, className = '' }) {
  const [internal, setInternal] = React.useState(defaultValue ?? tabs[0]?.id);
  const active = value ?? internal;
  const select = (id) => { setInternal(id); onChange && onChange(id); };
  const current = tabs.find((t) => t.id === active);
  return (
    <div className={['av-tabs', className].filter(Boolean).join(' ')}>
      <div className="av-tabs__list" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={t.id === active}
            className={['av-tab', t.id === active && 'av-tab--active'].filter(Boolean).join(' ')}
            onClick={() => select(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {current && <div className="av-tabs__panel" role="tabpanel">{current.content}</div>}
    </div>
  );
}
