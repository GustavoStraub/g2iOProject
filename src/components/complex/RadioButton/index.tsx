import { Radio } from 'antd';
import React, { useState } from 'react';

import * as S from './styles';

export type options = {
  value: string | number | boolean;
  label: string;
};
export type RadioButtonProps = {
  options: options[];
};

export function RadioButton({ options }: RadioButtonProps) {
  const [value, setValue] = useState(1);

  const onChange = (e: Event) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <S.Wrapper>
      <Radio.Group onChange={onChange}>
        {options.map((options) => (
          <Radio.Button key={options.label} value={options.value}>
            {options.label}
          </Radio.Button>
        ))}
      </Radio.Group>
    </S.Wrapper>
  );
}
