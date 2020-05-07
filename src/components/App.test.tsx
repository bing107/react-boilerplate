import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('app container', () => {
  it('should render the app correctly', () => {
    const { container } = render(<App />);
    expect(container).toHaveTextContent('yada yada');
  });
});
