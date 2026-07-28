import React from 'react';

export interface NavLink { label: string; href?: string; active?: boolean; }

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  /** Marca/logo à esquerda. */
  brand?: React.ReactNode;
  links?: NavLink[];
  /** Ações à direita (botões). */
  actions?: React.ReactNode;
}

export function Navbar(props: NavbarProps): JSX.Element;
