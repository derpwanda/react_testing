##Working with Jest (not in Create-React-App)

1. Create main folder
2. Create project folder
3. cd into project folder and run `npm init -y`. A `package.json` will be created.
4. Install Jest dependency `npm install jest`
5. Set up Jest and create config file
   a. run `npx jest --init` and answer the questions
   i. Would you like to use Jest when running "test" script in "package.json"? YES
   ii. Choose the test enviroment that will be used for testing: node/jsdom >> NODE
   iii. Do you want Jest to add coverage reports? NO
   iv. Automatically clear mock calls and instances between every test? NO
   b. scripts in `package.json` will have changed to:
   "scripts": {
   "test": "jest"
   }

    update to:
    "scripts": {
    "test": "jest --watchAll --verbose"
    },

6. Run tests using `npm test` or `yarn test`. We should get our first failure: no tests.
7. Add tests
