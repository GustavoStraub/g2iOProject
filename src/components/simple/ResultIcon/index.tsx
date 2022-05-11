import React from 'react';

import { Text } from '../Text';

type Props = {
  type: boolean;
  color?: string;
};

export default function ResultIcon({ type, color = 'lightPurple' }: Props) {
  return (
    <Text color={color} fontSize="2rem" fontWeight="bold" as="span">
      {type ? '+' : '-'}
    </Text>
  );
}
