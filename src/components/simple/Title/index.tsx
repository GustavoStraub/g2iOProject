import React from 'react';

import { Box } from 'components/simple/Box';

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
      {children}
    </Box>
  );
}
