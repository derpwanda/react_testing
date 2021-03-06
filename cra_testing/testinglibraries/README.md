# working with testing libraries

##

1. Create a React project with create-react-app.

2. Install `@testing-library/jest-dom` and `@testing-library/react` with yarn or npm. We do NOT need to install Jest as CRA projects come with Jest installed and working out of the box. Open `package.json` and find `dependencies`. The two `@testing-libary` should be listed.

3. Open App.test.js (inside the src folder). We won’t be needing react-dom as react-testing-library includes a render method to mount our components to an in-memory DOM. Let’s delete the contents of the test and bring in our dependencies:
   import React from 'react';
   import \* as rtl from '@testing-library/react';
   import '@testing-library/jest-dom/extend-expect';

    afterEach(rtl.cleanup);

    it('renders without crashing', () => {
    // ready to test!
    });

4. Note a few things about the imports:

    - React has to be in scope because we will be using JSX.
    - react-testing-library exposes a number of named functions we bring in using the import \* as syntax.
    - Code we need for its side effects can be imported and not saved into a variable, like we do with @testing-library/jest-dom/extend-expect to extend Jest’s repertoire of matchers.
    - We need to clean up after each test! Otherwise the simulated, in-memory DOM we render our components in will just get larger and larger.

5. Render a React element containing a “Hello World” message, and run tests as usual:

    it('renders without crashing', () => {
    const wrapper = rtl.render(
    <span className="greet">hello world</span>
    );
    });

6. Inspect the output by logging wrapper.debug(). The element will be rendered into a in-memory document-like structure

7. Capture the node of interest. Let’s assume the true, actual purpose of some React component returning the jsx <span>hello world</span> is to have a “hello” message rendered to the screen for the user to see. We could assert, that by mounting such a component, a span containing this language will be rendered by the browser. We can use a dom-testing-library query to capture such an element:
   it('renders without crashing', () => {
   const wrapper = rtl.render(
   <span className="greet">hello world</span>
   );
   // the querying functionality is accessed through the wrapper:
   const element = wrapper.queryByText(/hello/i);

    // assertions will come in here
    });

8. Run assertions about the actual output:
   expect(element).toBeTruthy(); // jest matcher
   expect(element).toBeInTheDocument(); // jest-dom matcher
   expect(element).toBeVisible(); // jest-dom matcher
