import React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'neutral' | 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'outline';
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export function Tag(props: TagProps): JSX.Element;
