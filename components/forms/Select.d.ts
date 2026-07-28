import React from 'react';

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  /** Opções como strings ou {value,label}. */
  options?: (string | SelectOption)[];
  /** Texto do placeholder desabilitado. */
  placeholder?: string;
}

export function Select(props: SelectProps): JSX.Element;
