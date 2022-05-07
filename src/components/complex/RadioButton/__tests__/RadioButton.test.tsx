import { render, screen } from '@testing-library/react';
import RadioButton from '../index';

describe('RadioButton', () => {
  it('should render', () => {
    render(<RadioButton />);

    expect(screen.getByTestId(RadioButton)).toBeInTheDocument();
  })
})
