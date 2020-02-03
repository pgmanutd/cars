import replaceAll from '../replaceAll';

describe('#replaceAll', () => {
  test.each`
    value                                   | mappedObject                         | output
    ${'Hello World'}                        | ${undefined}                         | ${'Hello World'}
    ${'Hello World'}                        | ${{}}                                | ${'Hello World'}
    ${'Hello SOME_KEY World ALSO_SOME_KEY'} | ${{ SOME_KEY: 1, ALSO_SOME_KEY: 2 }} | ${'Hello 1 World 2'}
  `(
    'should return $output for input value: $value, mappedObject: $mappedObject',
    ({ value, mappedObject, output }) => {
      expect(replaceAll(value, mappedObject)).toBe(output);
    },
  );
});
