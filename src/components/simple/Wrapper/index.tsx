import React from 'react';

import { Box } from 'components/simple/Box';

export type WrapperProps = {
  children: React.ReactChildren;
};

const Wrapper: React.FC = ({ children }: WrapperProps) => (
  <Box
    data-testid="Wrapper"
    textAlign="center"
    bg="#ddddde"
    borderRadius="sm"
    width="375px"
    height="667px"
  >
    {children}
  </Box>
);

export default Wrapper;
