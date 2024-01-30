/**
 * A function that generates random strings or numbers of a specified length and type.
 *
 * This function generates random values of a specified length and type.
 *
 * @param {number} length - The length of the generated string or number.
 * @param {"number" | "string" | "both"} type - The type of the generated value ("number", "string", or "both").
 * @param {Object} options - Additional options for generating values.
 * @param {boolean} options.specialCharacter - Whether to include special characters in the generated value.
 * @param {string} options.customCharacter - Custom characters to include in the generated value.
 * @return {string | number} The generated value.
 * @throws {Error} If invalid options are provided (e.g., empty customCharacter).
 * @example
 * const randomString = randomGenerator(10, "string", { specialCharacter: true });
 * console.log(randomString); // An example random string with special characters
 *
 * const randomNumber = randomGenerator(6, "number");
 * console.log(randomNumber); // An example random number
 */
function randomGenerator(
  length: number,
  type: "number" | "string" | "both" = 'both',
  options?: {
    specialCharacter?: boolean;
    customCharacter?: string;
  }
) {
  if (options?.customCharacter?.length === 0) {
    throw new Error("Invalid Property!");
  }

  let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "1234567890";
  let specialCharacters = "!@#$%^&*()_+=[]{}|:;<>,.?/~`";

  // Determine the character set based on the 'type' parameter
  const query =
    type === "number"
      ? numbers
      : type === "string"
      ? uppercaseLetters + lowercaseLetters
      : type === "both"
      ? uppercaseLetters + lowercaseLetters + numbers
      : "";

  // Include special characters based on the 'options.specialCharacter' parameter
  const query2 = options?.specialCharacter ? query + specialCharacters : query;

  // Merge with custom characters if provided
  let merge = options?.customCharacter
    ? query2 + options?.customCharacter
    : query2;

  let value = "";

  for (let i = 0; i < length; i++) {
    value += merge.charAt(Math.floor(Math.random() * merge.length));
  }

  return value;
}
export default randomGenerator;
