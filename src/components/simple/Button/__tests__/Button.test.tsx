import { render, screen } from '@testing-library/react';

import Button from '../index';

describe('Button', () => {
  it('should render', () => {
    render(<Button />);

    expect(screen.getByTestId('Button')).toBeInTheDocument();
  });
});
