// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

import _noop from 'lodash/fp/noop';

require('jest-localstorage-mock');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const jestFetchMock = require('jest-fetch-mock');

jestFetchMock.enableMocks();

jestFetchMock.mockResponse(JSON.stringify({}));

Object.defineProperty(window, 'scrollTo', { value: _noop, writable: true });
