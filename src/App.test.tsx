import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('app container', () => {
  it('should render the app correctly', () => {
    const { container, debug } = render(<App />);
    debug(container);
  });
});
