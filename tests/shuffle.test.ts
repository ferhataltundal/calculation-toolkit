import { sample, shuffle } from "../src/index";

//sample, shuffle
test("sample calculation", () => {
  const sourceArray = [1, 2, 3, 4];
  const sampleSize = 2;
  const result = sample(sourceArray, sampleSize);

  expect(result).toHaveLength(sampleSize);

  result.forEach((element) => {
    expect(sourceArray).toContain(element);
  });
});


test("shuffle calculation", () => {
  const originalArray = [1, 2, 5, 8, 9, 12];
  const shuffledArray = shuffle([...originalArray]);

  expect(shuffledArray).toHaveLength(originalArray.length);

  originalArray.forEach((element) => {
    expect(shuffledArray).toContain(element);
  });

  expect(shuffledArray).not.toEqual(originalArray);
});
