import { Radio, RadioGroupProps } from 'antd';
import React from 'react';

import * as S from './styles';

export type options = {
  value: string | number | boolean;
  label: string;
};
export interface RadioButtonProps extends RadioGroupProps {
  options?: options[];
  onChange: (e: any) => void;
}

const defaultOptions = [
  {
    value: 'True',
    label: 'True',
  },
  {
    value: 'False',
    label: 'False',
  },
];

export function RadioButtons({ options = defaultOptions, ...props }: RadioButtonProps) {
  return (
    <S.Wrapper>
      <Radio.Group {...props}>
        {options.map((options) => (
          <Radio.Button key={options.label} value={options.value}>
            {options.label}
          </Radio.Button>
        ))}
      </Radio.Group>
    </S.Wrapper>
  );
}
