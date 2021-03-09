import { render, screen } from '@testing-library/react';

import { Content } from '../Content';
import { TEST_ID } from '../constants';

const contentMockedText = 'Content';
const contentMockedChildren = <div>{contentMockedText}</div>;

describe('Content', () => {
  it('should be rendered successfully', () => {
    render(<Content>{contentMockedChildren}</Content>);

    expect(screen.queryByTestId(TEST_ID.content)).toBeInTheDocument();
    expect(screen.queryByText(contentMockedText)).toBeInTheDocument();
  });
});
