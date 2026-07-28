import React from 'react';

/**
 * Tabela de dados. Passe `columns` [{key,label,align}] e `rows` (array de objetos),
 * ou use `children` para montar <thead>/<tbody> manualmente.
 */
export function Table({ columns, rows, striped = false, className = '', children, ...rest }) {
  const cls = ['av-table', striped && 'av-table--striped', className].filter(Boolean).join(' ');
  if (children) return <table className={cls} {...rest}>{children}</table>;
  return (
    <table className={cls} {...rest}>
      <thead>
        <tr>{columns.map((c) => <th key={c.key} style={c.align ? { textAlign: c.align } : undefined}>{c.label}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={r.id ?? i}>
            {columns.map((c) => <td key={c.key} style={c.align ? { textAlign: c.align } : undefined}>{r[c.key]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
