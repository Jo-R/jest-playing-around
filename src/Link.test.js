import React from 'react';
import { render } from '@testing-library/react';
import { Link } from "./Link";
import renderer from 'react-test-renderer';
import TestRenderer from 'react-test-renderer';

const {act} = TestRenderer;

// https://testing-library.com/docs/react-testing-library/api#render
test('renders facebook link', () => {
  const { getByText } = render(<Link page="http://www.facebook.com">Facebook</Link>);
  const linkElement = getByText(/Facebook/i);
  expect(linkElement).toBeInTheDocument();
});

// snapshot test
test('Link changes the class when hovered', () => {
  let component;
  act(() => {
    component = renderer.create(
      <Link page="http://www.facebook.com">Facebook</Link>,
    );
  }) 
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => tree.props.onMouseEnter());
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  act(() => tree.props.onMouseLeave())
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
