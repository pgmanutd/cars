import { getCarName, getCarFeatures } from '../carUtils';

describe('#carUtils', () => {
  describe('#getCarName', () => {
    test.each`
      car                                                                 | output
      ${{ manufacturerName: 'manufacturerName', modelName: 'modelName' }} | ${'manufacturerName modelName'}
    `('should return $output for input car: $car', ({ car, output }) => {
      expect(getCarName(car)).toBe(output);
    });
  });

  describe('#getCarFeatures', () => {
    test.each`
      car                                                                                                     | stockNumberPrefix | output
      ${{ stockNumber: 1234, mileage: { number: 5678, unit: 'unit' }, fuelType: 'fuelType', color: 'color' }} | ${undefined}      | ${'1234 - 5678 UNIT - FuelType - Color'}
      ${{ stockNumber: 1234, mileage: { number: 5678, unit: 'unit' }, fuelType: 'fuelType', color: 'color' }} | ${'Stock #'}      | ${'Stock #1234 - 5678 UNIT - FuelType - Color'}
      ${{ stockNumber: 1234, mileage: null, fuelType: 'fuelType', color: 'color' }}                           | ${'Stock #'}      | ${'Stock #1234 - undefined  - FuelType - Color'}
    `(
      'should return $output for input car: $car, stockNumberPrefix: $stockNumberPrefix',
      ({ car, stockNumberPrefix, output }) => {
        expect(getCarFeatures(car, { stockNumberPrefix })).toBe(output);
      },
    );
  });
});
