import React from 'react';
import { render, waitFor, screen } from '@testing-library/react-native';
import HomeScreen from '../../../../src/screens/homescreen/HomeScreen';

beforeEach(() => {
  global.fetch = jest.fn((url: string) => {
    if (url === 'https://jsonplaceholder.typicode.com/posts') {
      return Promise.resolve({
        json: () =>
          Promise.resolve([
            { id: 1, title: 'Post 1', body: 'This is body 1' },
            { id: 2, title: 'Post 2', body: 'This is body 2' },
          ]),
      });
    }

    if (url === 'https://jsonplaceholder.typicode.com/users') {
      return Promise.resolve({
        json: () =>
          Promise.resolve([
            { id: 1, name: 'User One' },
            { id: 2, name: 'User Two' },
          ]),
      });
    }

    return Promise.reject(new Error('Unknown URL'));
  }) as jest.Mock;
});

describe('HomeScreen', () => {
  it('renders posts and users after fetch', async () => {
    render(<HomeScreen />);

    // Wait for posts
    await waitFor(() => {
      expect(screen.getByText('Post 1')).toBeTruthy();
      expect(screen.getByText('Post 2')).toBeTruthy();
    });

    // Wait for users
    await waitFor(() => {
      expect(screen.getByText('User One')).toBeTruthy();
      expect(screen.getByText('User Two')).toBeTruthy();
    });
  });

  it('renders correct number of post cards', async () => {
    const { getAllByText } = render(<HomeScreen />);
    await waitFor(() => {
      const titles = getAllByText(/Post/i); // Matches both post titles
      expect(titles.length).toBeGreaterThanOrEqual(2);
    });
  });

  it('renders horizontal user list', async () => {
    render(<HomeScreen />);
    await waitFor(() => {
      expect(screen.getByTestId('horizontal-list')).toBeTruthy();
    });
  });
});
