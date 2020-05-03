import { expectGen } from "./common";

describe("Covscript generator basic tests", () => {
  expectGen({ "+": [1, 2] }, "1 + 2");
  expectGen({ "-": [1, 2] }, "1 - 2");
  expectGen({ "*": [1, 2] }, "1 * 2");
  expectGen({ "*": [1, { "+": [2, 3] }] }, "1 * (2 + 3)");
  expectGen({ if: [1, 2, 3] }, "If 1 Then 2 Else 3 EndIf");
  expectGen({ var: "testQuestion.value" }, "testQuestion.value");
  expectGen([1, 2, 3, 4, 5, 6], "[1, 2, 3, 4, 5, 6]");
  expectGen(true, "true");
  expectGen(false, "false");
  expectGen("Hello", '"Hello"');
});