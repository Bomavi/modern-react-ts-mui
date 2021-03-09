import { render, screen } from '@testing-library/react';

import { withIntl } from 'utils/tests/helpers';

import { Button } from '../Button';
import { TEST_ID } from '../constants';

const buttonMockedValue = 'Button test name';

describe('Button', () => {
  it('should be rendered successfully', () => {
    render(withIntl(<Button>{buttonMockedValue}</Button>)({}));

    expect(screen.queryByTestId(TEST_ID.button)).toBeInTheDocument();
    expect(screen.queryByText(buttonMockedValue)).toBeInTheDocument();
  });
});
