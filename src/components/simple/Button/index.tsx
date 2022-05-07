import React from 'react';

import * as S from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <S.Button {...rest} as="button" data-testid="Button">
      {title}
    </S.Button>
  );
}
