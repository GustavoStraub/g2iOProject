import styled from 'styled-components';
import { theme } from 'styled-tools';

import { Box } from 'components/simple/Box';

export const Wrapper = styled(Box)`
  .ant-radio-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .ant-radio-button-wrapper {
    cursor: pointer;
    background: ${theme('colors.lightPurple')};
    color: ${theme('colors.white')};
    border-radius: ${theme('radii.md')};
    padding: 1rem 3rem;
    font-size: 1.3rem;
    display: flex;
    gap: 6rem;
    :hover {
      filter: brightness(1.1);
    }
  }
  .ant-radio-button-wrapper-checked {
    background: ${theme('colors.lightPurple')};
  }
  input[type='radio']:after {
    width: 20px;
    height: 20px;
    border-radius: 15px;
    top: -0.3rem;
    left: -2px;
    position: relative;
    background-color: ${theme('colors.purple')};
    content: '';
    display: inline-block;
    visibility: visible;
    border: 4px solid ${theme('colors.purple')};
  }

  input[type='radio']:checked:after {
    width: 25px;
    height: 25px;
    border-radius: 15px;
    top: -0.3rem;
    left: -2px;
    position: relative;
    background-color: ${theme('colors.lightPurple')};
    content: '';
    display: inline-block;
    visibility: visible;
    border: 3px solid ${theme('colors.white')};
  }
`;
