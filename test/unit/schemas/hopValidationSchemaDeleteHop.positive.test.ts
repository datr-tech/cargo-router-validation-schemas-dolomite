import { hopValidationSchemaDeleteHop } from '@app-crvsd/schemas';

describe('hopValidationSchemaDeleteHop', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        hopId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...hopValidationSchemaDeleteHop };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
