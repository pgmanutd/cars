import replaceAllUtils from '../replaceAllUtils';

describe('#replaceAllUtils', () => {
  test.each`
    value                                   | mappedObject                         | output
    ${'Hello World'}                        | ${undefined}                         | ${'Hello World'}
    ${'Hello World'}                        | ${{}}                                | ${'Hello World'}
    ${'Hello SOME_KEY World ALSO_SOME_KEY'} | ${{ SOME_KEY: 1, ALSO_SOME_KEY: 2 }} | ${'Hello 1 World 2'}
  `(
    'should return $output for input $value, $mappedObject',
    ({ value, mappedObject, output }) => {
      expect(replaceAllUtils(value, mappedObject)).toBe(output);
    },
  );
});
