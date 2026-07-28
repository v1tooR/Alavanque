import React from 'react';

export interface TabItem { id: string; label: React.ReactNode; content: React.ReactNode; }

export interface TabsProps {
  tabs: TabItem[];
  /** Controlado: id da aba ativa. */
  value?: string;
  /** Não-controlado: aba inicial. */
  defaultValue?: string;
  onChange?: (id: string) => void;
}

export function Tabs(props: TabsProps): JSX.Element;
