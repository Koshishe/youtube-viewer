import React from 'react';
import { App } from './App';
import { screen } from '@testing-library/react';
import { render } from './utils/test-utils';

it("search bar renders in document", () => {
  render(<App />);
  expect(screen.getByLabelText('search-bar')).toBeInTheDocument()
});


it("video is loading after loading page", () => {
  render(<App />);
  expect(screen.getByLabelText('video loading')).toBeInTheDocument()
});
