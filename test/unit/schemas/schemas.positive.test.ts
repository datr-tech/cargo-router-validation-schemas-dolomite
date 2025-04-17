import * as schemas from '@app/schemas';

describe('schemas', () => {
  describe('positive', () => {
    test('should contain the expected number of schemas', () => {
      // Arrange
      const numSchemasExpected = 12;

      // Act
      const numSchemasFound = Object.keys(schemas).length;

      // Assert
      expect(numSchemasFound).toEqual(numSchemasExpected);
    });
  });
});
