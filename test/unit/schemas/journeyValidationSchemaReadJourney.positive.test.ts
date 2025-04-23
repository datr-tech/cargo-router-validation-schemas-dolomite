import { journeyValidationSchemaReadJourney } from '@app-crvsd/schemas';

describe('journeyValidationSchemaReadJourney', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        journeyId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...journeyValidationSchemaReadJourney };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
