import React from 'react';

export interface TableColumn { key: string; label: string; align?: 'left' | 'center' | 'right'; }

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  columns?: TableColumn[];
  rows?: Record<string, React.ReactNode>[];
  /** Zebra nas linhas pares. */
  striped?: boolean;
  children?: React.ReactNode;
}

export function Table(props: TableProps): JSX.Element;
