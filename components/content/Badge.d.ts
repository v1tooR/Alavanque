import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'accent' | 'primary' | 'neutral';
  /** Ponto de status sem número. */
  dot?: boolean;
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
