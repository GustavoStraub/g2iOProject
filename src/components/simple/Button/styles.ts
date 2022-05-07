import styled from 'styled-components';
import { theme } from 'styled-tools';

import { Box } from 'components/simple/Box';

export const Button = styled(Box)`
  width: 100%;
  cursor: pointer;
  color: ${theme('colors.white')};
  background: ${theme('colors.lightPurple')};
  border: none;
  border-radius: ${theme('radii.md')};
  padding: 1rem 3rem;
  font-size: 1.3rem;
  :hover {
    filter: brightness(1.1);
  }
`;
