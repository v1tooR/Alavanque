import React from 'react';

/** Campo de texto com rótulo, dica e estado de erro. */
export function Input({
  label,
  hint,
  error,
  required = false,
  id,
  className = '',
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
      <input id={fieldId} className="av-input" {...rest} />
      {(error || hint) && <span className="av-hint" style={error ? { color: 'var(--color-danger)' } : undefined}>{error || hint}</span>}
    </div>
  );
}
