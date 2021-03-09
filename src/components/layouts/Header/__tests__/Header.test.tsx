import { render, screen } from '@testing-library/react';

import { withIntl } from 'utils/tests/helpers';

import { Header } from '../Header';
import { TEST_ID } from '../constants';

describe('Header', () => {
  it('should be rendered successfully', () => {
    render(withIntl(<Header />)({}));

    expect(screen.queryByTestId(TEST_ID.header)).toBeInTheDocument();
  });
});
