import parseJSON from '../parseJSON';

describe('#parseJSON', () => {
  test.each`
    stringifiedJSON | fallbackValue | output
    ${undefined}    | ${'value'}    | ${'value'}
    ${'{"a": 1}'}   | ${undefined}  | ${{ a: 1 }}
    ${{}}           | ${'value'}    | ${'value'}
  `(
    'should return $output for input stringifiedJSON: $stringifiedJSON, fallbackValue: $fallbackValue',
    ({ stringifiedJSON, fallbackValue, output }) => {
      expect(parseJSON(stringifiedJSON, fallbackValue)).toStrictEqual(output);
    },
  );
});
