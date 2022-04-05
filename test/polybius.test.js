// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius.js");

describe("polybius", () => {
  it("should be a function", () => {
    expect(polybius).to.be.a("function");
  });
  it("should return a string", () => {
    expect(polybius("Zebra")).to.be.a("string");
  });
  it("should return a encoded message", () => {
    const expected = "3251131343";
    const actual = polybius("Hello");
    console.log(`expect expected: "${expected}" to equal actual: "${actual}"`);
    expect(actual).to.equal(expected);
  });
  it("should recoginze i and j are both 42", () => {
    const expected = "4222134343";
    const actual = polybius("igloo");
    console.log(`expect expected: "${expected}" to equal actual: "${actual}"`);
    expect(actual).to.equal(expected);
  });
  it("should return a encoded message with spaces", () => {
    const expected = "3111135121 4234 31434313";
    const actual = polybius("Caleb is cool");
    console.log(`expect expected: "${expected}" to equal actual: "${actual}"`);
    expect(actual).to.equal(expected);
  });
  it("should decode a message if encode is set to false", () => {
    const expected = "caleb i/js cool";
    const actual = polybius("3111135121 4234 31434313", false);
    console.log(`expect expected: "${expected}" to equal actual: "${actual}"`);
    expect(actual).to.equal(expected);
  });
  it('should return false if the length of all numbers is false', () => {
    const expected = false;
    const actual = polybius("3111135121 4234 3143433", false);
    console.log(`expect expected: "${expected}" to equal actual: "${actual}"`);
    expect(actual).to.equal(expected);
  })
});
