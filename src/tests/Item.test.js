import { render } from '@testing-library/react';
import Item from '../components/Item';
import { EMOJI_CHECK_MARK, EMOJI_CROSS_MARK } from '../constants';

describe('Item', () => {
  it('should render breed item', () => {
    const props = {
      data: {
        affection_level: 10,
        description: 'mock description',
        image: { url: 'mock url' },
        name: 'mock name',
        short_legs: true,
        temperament: 'mock temperament',
      },
    };

    const { getByText } = render(<Item {...props} />);
    expect(getByText(props.data.name)).toBeInTheDocument();
    expect(getByText(/affection level/i)).toBeInTheDocument();
    expect(getByText(/short legs/i)).toBeInTheDocument();
    expect(getByText(EMOJI_CHECK_MARK, { exact: false })).toBeInTheDocument();
    expect(getByText(props.data.temperament)).toBeInTheDocument();
    expect(getByText(`"${props.data.description}"`)).toBeInTheDocument();
  });

  it('should handle absent values', () => {
    const props = {
      data: {
        affection_level: 10,
        description: null,
        image: null,
        name: 'mock name',
        short_legs: false,
        temperament: 'mock temperament',
      },
    };

    const { getByAltText, getByText, container } = render(<Item {...props} />);
    expect(getByAltText('mock name')).toBeInTheDocument();
    expect(getByText(EMOJI_CROSS_MARK, { exact: false })).toBeInTheDocument();
    expect(container.querySelector('.font-italic')).not.toBeInTheDocument();
  });
});
