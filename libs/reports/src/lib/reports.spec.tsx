import { render } from '@testing-library/react';

import Reports from './reports';

describe('Reports', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reports name={'Lapani'} />);
    expect(baseElement).toBeTruthy();
  });
});
