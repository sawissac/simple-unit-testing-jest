const { verifyPhoneNumber, parsePhoneNumber } = require("../src/util");

/* The `verifyMockData` array contains a series of objects, each representing a test case for verifying
phone numbers. Each object has three properties: */
const verifyMockData = [
  {
    question:
      "925-042-4923 should return correct is true and input is 925-042-4923",
    answer: verifyPhoneNumber("925-042-4923"),
    expectResult: { correct: true, input: "925-042-4923" },
  },
  {
    question:
      "(+95)925-042-4923 should return correct is true and input is 925-042-4923",
    answer: verifyPhoneNumber("(+95)925-042-4923"),
    expectResult: { correct: true, input: "(+95)925-042-4923" },
  },
  {
    question:
      "(+955)925-042-4923 should return correct is false and input is (+955)925-042-4923",
    answer: verifyPhoneNumber("(+955)925-042-4923"),
    expectResult: { correct: false, input: "(+955)925-042-4923" },
  },
  {
    question:
      "(+95)9255-042-4923 should return correct is false and input is (+95)9255-042-4923",
    answer: verifyPhoneNumber("(+95)9255-042-4923"),
    expectResult: { correct: false, input: "(+95)9255-042-4923" },
  },
  {
    question:
      "(+95)925-0422-4923 should return correct is true and input is (+95)925-0422-4923",
    answer: verifyPhoneNumber("(+95)925-0422-4923"),
    expectResult: { correct: true, input: "(+95)925-0422-4923" },
  },
  {
    question:
    "(+95)925-0422-4923 should return correct is true and input is 092504224923",
    answer: parsePhoneNumber(verifyPhoneNumber("(+95)925-0422-4923")),
    expectResult: { correct: true, input: "092504224923" },
  },
  {
    question:
      "925-0422-4923 should return correct is true and input is 092504224923",
    answer: parsePhoneNumber(verifyPhoneNumber("925-0422-4923")),
    expectResult: { correct: true, input: "092504224923" },
  },
];

/* The `describe` block with the title "Checking mock data property..." is a part of a testing suite
using a testing framework like Jest or Mocha. Within this block, there is an `it` block that tests
whether the structure of the `verifyMockData` array matches the expected object structure. */
describe("Checking mock data property...", () => {
  it("verifyMockData should be the same as the expected object", () => {
    expect(Object.keys(verifyMockData.at(0))).toEqual([
      "question",
      "answer",
      "expectResult",
    ]);
  });
});

/* The `describe("Utility testing for phone number...", () => { ... })` block is a part of a testing
suite using a testing framework like Jest or Mocha. Within this block, the `verifyMockData` array is
being iterated over using the `map` function to run individual test cases. */
describe("Utility testing for phone number...", () => {
  verifyMockData.map((ls) => {
    const { question, answer, expectResult } = ls ?? {};
    it(question, () => {
      expect(answer).toEqual(expectResult);
    });
  });
});
