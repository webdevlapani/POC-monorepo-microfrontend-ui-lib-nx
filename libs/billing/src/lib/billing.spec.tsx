import { render } from '@testing-library/react';

import Billing from './billing';

describe('Billing', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Billing name={'suhag'} />);
    expect(baseElement).toBeTruthy();
  });
});
