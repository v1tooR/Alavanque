import React from 'react';

export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Botões do rodapé. */
  actions?: React.ReactNode;
}

export function Dialog(props: DialogProps): JSX.Element | null;
