import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Rótulo acima do campo. */
  label?: string;
  /** Texto de dica abaixo do campo. */
  hint?: string;
  /** Mensagem de erro; ativa o estado de erro (borda vermelha). */
  error?: string;
  /** Mostra o asterisco laranja de obrigatório. */
  required?: boolean;
}

export function Input(props: InputProps): JSX.Element;
