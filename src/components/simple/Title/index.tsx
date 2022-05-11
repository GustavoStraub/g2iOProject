import React from 'react';

import { Box } from 'components/simple/Box';
import { Text } from 'components/simple/Text';

type Props = {
  children: React.ReactNode;
};

export function Title({ children }: Props) {
  return (
    <Box
      height="8rem"
      borderRadius="sm"
      backgroundColor="lightPurple"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Text textAlign="center" color="white" fontSize="2rem" as="p">
        {children}
      </Text>
    </Box>
  );
}
