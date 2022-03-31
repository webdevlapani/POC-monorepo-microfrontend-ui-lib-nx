import { render } from '@testing-library/react';

import BlifloRoutes from './bliflo-routes';

describe('BlifloRoutes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlifloRoutes />);
    expect(baseElement).toBeTruthy();
  });
});
