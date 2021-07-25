import { render } from '@testing-library/react';
import { App } from '../App';

describe('App', () => {
  it('should fetch data on mount', () => {
    const props = {
      isLoading: false,
      isError: false,
      data: null,
      fetchBreeds: jest.fn(),
    };
    render(<App {...props} />);
    expect(props.fetchBreeds).toBeCalledTimes(1);
  });

  it('should render loading screen', () => {
    const props = {
      isLoading: true,
      isError: false,
      data: null,
      fetchBreeds: jest.fn(),
    };
    const { getByText } = render(<App {...props} />);
    expect(getByText('please wait', { exact: false })).toBeInTheDocument();
  });

  it('should render error screen', () => {
    const props = {
      isLoading: false,
      isError: true,
      data: null,
      fetchBreeds: jest.fn(),
    };
    const { getByText } = render(<App {...props} />);
    expect(getByText('Error, please retry!')).toBeInTheDocument();
  });

  it('should render a list', () => {
    const props = {
      isLoading: false,
      isError: false,
      data: [],
      fetchBreeds: jest.fn(),
    };
    const { container } = render(<App {...props} />);
    const list = container.querySelector('#breeds-list');
    expect(list).toBeInTheDocument();
  });
});
