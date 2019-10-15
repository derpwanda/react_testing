import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup);

// 
it('App renders without crashing', () => {
  const wrapper = rtl.render(<App />);
  console.log(wrapper.debug())

  const element = wrapper.queryByText(/hello World/i);
  expect(element).toBeInTheDocument(); //DOM //jest matcher
  expect(element).toBeTruthy(); //jest-dom matcher
  expect(element).toBeVisible(); //DOM //jest-dom matcher
});

it('span renders the text Hello World without crashing', () => {
  const wrapper = rtl.render(
    <span className="greet">hello World</span>
  );
});

/*
// dom-testing-library queries
// SELECT DOM NODES USING QUERIES
// There are many queries available, for single and multiple elements, and with // three different prefixes: query, get and find
it('renders "all about kittens 1" text', () => {
  const wrapper = rtl.render(<App foo="you may inject props!" />);
  console.log(wrapper.debug())
  // IMPORTANT
  // wrapper.queryByText() returns either the node, or null:
  const hasKittensText = wrapper.queryByText(/all about kittens/i);
  // expect(hasKittensText).toBeInTheDocument();
  // wrapper.getByText() is an alternative to wrapper.queryByText()
  expect(wrapper.getByText(/all about kittens/i));
});

it('renders "all about kittens 2" text', () => {
  const wrapper = rtl.render(<App />);
  expect(wrapper.getByLabelText(/All About Kittens/i));
});


 */