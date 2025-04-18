import { hopValidationSchemaCreateHop } from '@app/schemas';
import fs from 'node:fs';
import path from 'node:path';

describe('hopValidationSchemaCreateHop', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchemaName = 'hopValidationSchemaCreateHop';
      const expectedSchemaDir = path.resolve('./src/schemas');
      const expectedSchemaPath = path.resolve(
        expectedSchemaDir,
        `${expectedSchemaName}.json`,
      );
      const expectedSchemaContents = fs.readFileSync(expectedSchemaPath, 'utf8');
      const expectedSchemaJson = JSON.parse(expectedSchemaContents);

      expect(expectedSchemaJson).not.toBeFalsy();
      expect(hopValidationSchemaCreateHop).not.toBeFalsy();
      expect(hopValidationSchemaCreateHop).toStrictEqual(expectedSchemaJson);
    });
  });
});
