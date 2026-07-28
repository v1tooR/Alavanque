import React from 'react';

/** Modal centralizado sobre backdrop desfocado. Controlado por `open`. */
export function Dialog({ open, onClose, title, children, actions = null }) {
  if (!open) return null;
  return (
    <div className="av-dialog-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="av-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="av-dialog__body">
          {title && <h2 className="av-dialog__title">{title}</h2>}
          <div className="av-dialog__text">{children}</div>
        </div>
        {actions && <div className="av-dialog__actions">{actions}</div>}
      </div>
    </div>
  );
}
