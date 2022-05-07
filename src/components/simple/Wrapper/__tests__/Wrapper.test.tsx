import { render, screen } from '@testing-library/react';

import Wrapper from '../index';

describe('Wrapper', () => {
  it('should render', () => {
    render(<Wrapper />);

    expect(screen.getByTestId('Wrapper')).toBeInTheDocument();
  });
});
