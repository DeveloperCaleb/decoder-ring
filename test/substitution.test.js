// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution.js");

describe("substitution", () => {
  it("should return a function", () => {
    expect(substitution).to.be.a("function");
  });
  it("should return a string", () => {
    expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.be.a(
      "string"
    );
  });
  it("should encode a string", () => {
    const expected = "jrufscpw";
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    console.log(`expect actual: ${actual} to equal expected: ${expected}`);
    expect(actual).to.equal(expected);
  });
  it("should preserve spaces", () => {
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    console.log(`expect actual: ${actual} to equal expected: ${expected}`);
    expect(actual).to.equal(expected);
  });
  it("should decode a message using the given substitution alphabet", () => {
    const expected = "you are an excellent spy";
    const actual = substitution(
      "elp xhm xf mbymwwmfj dne",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    console.log(`expect actual: ${actual} to equal expected: ${expected}`);
    expect(actual).to.equal(expected);
  });
  it("should return false if the subAlphabet is missing", () => {
    const expected = false;
    const actual = substitution("thinkful");
    console.log(`expect actual: ${actual} to equal expected: ${expected}`);
    expect(actual).to.equal(expected);
  });
  it("should return false if the subAlphabet is not 26 characters", () => {
    const expected = false;
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibevx"
    );
    console.log(`expect actual: ${actual} to equal expected: ${expected}`);
    expect(actual).to.equal(expected);
  });
  it("should return false if the subAlphabet does not contain all unique characters", () => {
    const expected = false;
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibex"
    );
    console.log(`expect actual: ${actual} to equal expected: ${expected}`);
    expect(actual).to.equal(expected);
  });
});
