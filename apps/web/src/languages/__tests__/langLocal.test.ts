import { expect, test } from 'vitest'
import { en } from "../en";
import { fi } from "../fi";

// checks that the language object keys are identical
test("language objects / translations have the same keys", () => {
  expect(en).toBeDefined();
  expect(fi).toBeDefined();
  expect(Object.keys(en).sort()).toEqual(Object.keys(fi).sort());
});
