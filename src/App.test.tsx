import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import '@testing-library/jest-dom'


test('Search Bar component rendered correctly', () => {
  render(<App />);
  const appTitle = screen.getByText(/search gifs/i);
  const searchButton = screen.getByText("Search");
  const searchBox = screen.getByText("Search Gifs")

  expect(appTitle).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
  expect(searchBox).toBeInTheDocument();
});

test('Navbar component rendered correctly', () => {
  render(<App />);
  const homeNavLink = screen.getByText("Home");
  const trendingNavLink = screen.getByText("Trending");

  expect(homeNavLink).toBeInTheDocument();
  expect(trendingNavLink).toBeInTheDocument();
});




