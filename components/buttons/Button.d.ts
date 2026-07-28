import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Estilo visual. `accent` é o CTA laranja de maior peso. */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'danger';
  /** Tamanho do botão. */
  size?: 'sm' | 'md' | 'lg';
  /** Ocupa 100% da largura. */
  block?: boolean;
  /** Ícone à esquerda do rótulo (nó React, ex: <Lucide />). */
  icon?: React.ReactNode;
  /** Ícone à direita do rótulo. */
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
