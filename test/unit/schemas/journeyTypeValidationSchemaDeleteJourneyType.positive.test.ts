import { journeyTypeValidationSchemaDeleteJourneyType } from '@app-crvsd/schemas';

describe('journeyTypeValidationSchemaDeleteJourneyType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        journeyTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...journeyTypeValidationSchemaDeleteJourneyType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
