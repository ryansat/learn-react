import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments count', () => {
  const { getByText } = render(<Counter />);
  const count = getByText('0');
  const button = getByText('+');

  fireEvent.click(button);

  expect(count.textContent).toBe('1');
});
