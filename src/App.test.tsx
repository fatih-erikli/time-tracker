import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import App from './App';

require('fake-indexeddb/auto');

test('renders Time tracker application', () => {
  act(() => { render(<App workLogEntriesFetcher={() => Promise.resolve([])} />); });
  const linkElement = screen.getByText(/Time Tracker/i);
  expect(linkElement).toBeInTheDocument();
});

test('Start button should turn into pause button when I click on it', () => {
  act(() => { render(<App workLogEntriesFetcher={() => Promise.resolve([])} />); });
  const buttonElement = screen.getByText(/Start/i);
  expect(buttonElement).toBeInTheDocument();
  buttonElement.click();
  const pauseElement = screen.getByText(/Pause/i);
  expect(pauseElement).toBeInTheDocument();
});

beforeEach(() => {
  localStorage.clear();
});
