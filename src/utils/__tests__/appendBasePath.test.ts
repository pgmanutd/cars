import appendBasePath from '../appendBasePath';

describe('#appendBasePath', () => {
  test.each`
    basePath      | path      | output
    ${'basePath'} | ${'path'} | ${'basePath?path'}
  `(
    'should return $output for input basePath: $basePath, path: $path',
    ({ basePath, path, output }) => {
      expect(appendBasePath(basePath, path)).toBe(output);
    },
  );
});
