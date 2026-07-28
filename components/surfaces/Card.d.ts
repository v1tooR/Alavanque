import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: 'sm' | 'md' | 'lg';
  /** Hover de elevação (para cards clicáveis). */
  interactive?: boolean;
  /** Mídia no topo (img, vídeo, placeholder). */
  media?: React.ReactNode;
  title?: React.ReactNode;
  /** Rodapé opcional (ações, meta). */
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
