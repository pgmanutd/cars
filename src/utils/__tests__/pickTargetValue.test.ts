import pickTargetValue from '../pickTargetValue';

describe('#pickTargetValue', () => {
  test.each`
    event                             | output
    ${{ target: { value: 'value' } }} | ${'value'}
  `('should return $output for input event: $event', ({ event, output }) => {
    expect(pickTargetValue(event)).toBe(output);
  });
});
