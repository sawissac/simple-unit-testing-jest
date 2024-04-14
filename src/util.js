/**
 * The function `verifyPhoneNumber` checks if a phone number is in a valid format for either a specific
 * country code or a general format.
 * @param {string} phoneNumber - The `verifyPhoneNumber` function takes a phone number as input and checks if it
 * matches the specified regular expression pattern. The regular expression pattern is designed to
 * match phone numbers in the format of either "(+95)xxx-xxx-xxx-xxx" or "xxx-xxx-xxx-xxx"
 * @returns {{correct: boolean, input: string}} The function `verifyPhoneNumber` returns an object with two properties:
 * 1. `correct`: a boolean value indicating whether the phone number matches the specified format.
 * 2. `input`: the original input phone number that was passed to the function.
 */
function verifyPhoneNumber(phoneNumber) {
  const re = /^\(\+95\)\d{3}(?:[-]\d{3,4}){2,3}$|^\d{3}(?:[-]\d{3,4}){2,3}$/gms;
  const ok = phoneNumber.match(re);
  return { correct: !!ok, input: phoneNumber };
}

/**
 * The function `parsePhoneNumber` takes a verified phone number object, removes any special characters
 * or country code, adds a prefix of "0", and returns the modified phone number.
 * @param {{correct: boolean, input: string}} verifiedPhoneNumber - verifiedPhoneNumber is an object that contains two properties:
 * @returns {{correct: boolean, input: string}} The `parsePhoneNumber` function is returning an object with properties `correct` and
 * `input`. The `correct` property is being passed from the `verifiedPhoneNumber` object without any
 * changes. The `input` property is being modified by removing any occurrences of `(+95)` and `-`
 * characters using the `replaceAll` method with a regular expression, and then concatenating the
 * modified `parsed` input
 */

function parsePhoneNumber(verifiedPhoneNumber){
  const prefix = "0"
  const {correct, input} = verifiedPhoneNumber
  const parsed = input.replaceAll(/\(\+95\)|[-]/g, "");
  const result = [prefix, parsed].join("")
  return {correct, input: result}
}

module.exports = { verifyPhoneNumber, parsePhoneNumber };
