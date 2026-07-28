import React from 'react';

/** Seletor nativo estilizado com rótulo e dica. */
export function Select({
  label,
  hint,
  error,
  required = false,
  id,
  options = [],
  placeholder,
  className = '',
  children,
  ...rest
}) {
  const fieldId = id || (label ? `av-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <div className={['av-field', error && 'av-field--error', className].filter(Boolean).join(' ')}>
      {label && (
        <label className="av-label" htmlFor={fieldId}>
          {label}{required && <span className="av-label__req"> *</span>}
        </label>
      )}
      <select id={fieldId} className="av-select" {...rest}>
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map((o) => {
          const value = typeof o === 'string' ? o : o.value;
          const text = typeof o === 'string' ? o : o.label;
          return <option key={value} value={value}>{text}</option>;
        })}
        {children}
      </select>
      {(error || hint) && <span className="av-hint" style={error ? { color: 'var(--color-danger)' } : undefined}>{error || hint}</span>}
    </div>
  );
}
