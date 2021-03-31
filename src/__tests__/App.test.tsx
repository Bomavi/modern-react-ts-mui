import { render, screen } from '@testing-library/react';

import { withIntl } from 'utils/tests/helpers';

import { App } from '../App';

describe('App', () => {
  it('it should be rendered successfully', () => {
    render(withIntl(<App />)({}));

    expect(screen.queryByTestId('App')).toBeInTheDocument();
  });
});
