import { journeyTypeValidationSchemaReadJourneyType } from '@app-crvsd/schemas';

describe('journeyTypeValidationSchemaReadJourneyType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        journeyTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...journeyTypeValidationSchemaReadJourneyType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
