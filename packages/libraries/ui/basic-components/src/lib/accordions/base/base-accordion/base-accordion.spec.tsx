import { render, screen } from '@testing-library/react';

import BaseAccordion from './base-accordion';

describe('BaseAccordion', () => {
  it('should render open successfully', () => {
    const onToggle = jest.fn();
    render(
      <BaseAccordion
        titleContent={'Test Title'}
        accordionContent={'Test Content'}
        onToggle={onToggle}
        isOpen={true}
      />
    );
    expect(screen.getByText('Test Title')).toBeTruthy();
    expect(screen.getByText('Test Content')).toBeTruthy();
  });

  it('should render closed successfully', () => {
    const onToggle = jest.fn();
    render(
      <BaseAccordion
        titleContent={'Test Title'}
        accordionContent={'Test Content'}
        onToggle={onToggle}
        isOpen={false}
      />
    );
    expect(screen.getByText('Test Title')).toBeTruthy();
    expect(screen.getByText('Test Content')).not.toBeTruthy();
  });
});
