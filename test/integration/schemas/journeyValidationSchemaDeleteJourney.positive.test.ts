import { journeyValidationSchemaDeleteJourney } from './../../../dist';

describe('journeyValidationSchemaDeleteJourney', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        journeyId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...journeyValidationSchemaDeleteJourney };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
