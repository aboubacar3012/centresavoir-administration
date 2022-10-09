import { render } from '@testing-library/react';

import Campus from './campus';

describe('Campus', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Campus />);
    expect(baseElement).toBeTruthy();
  });
});
