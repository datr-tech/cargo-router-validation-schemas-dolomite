import { hopValidationSchemaReadHop } from '@app-crvsd/schemas';

describe('hopValidationSchemaReadHop', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        hopId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...hopValidationSchemaReadHop };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
