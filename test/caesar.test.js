// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar.js");

describe("caesar", () => {
  it("should be a function", () => {
    expect(caesar).to.be.a("function");
  });
  it("should return a string", () => {
    expect(caesar("hello", 5)).to.be.a("string");
  });
  it("should return false if shift = 0", () => {
    const expected = false;
    const actual = caesar("hello", 0);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift > 25", () => {
    const expected = false;
    const actual = caesar("hello", 26);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift < -25", () => {
    const expected = false;
    const actual = caesar("hello", -26);
    expect(actual).to.equal(expected);
  });
  it("should return a caesar shift encoded string", () => {
    const expected = "ifmmp";
    const actual = caesar("Hello", 1);
    console.log(`expect expected: "${expected}" to equal actual: "${actual}"`);
    expect(actual).to.equal(expected);
  });
  it("should ignore spaces and other symbols", () => {
    const expected = "ifmmp, nz obnf jt dbmfc";
    const actual = caesar("Hello, my name is Caleb", 1);
    console.log(`expect expected: "${expected}" to equal actual: "${actual}"`);
    expect(actual).to.equal(expected);
  });
  it('should go back to the beginning of the alphabet if the shifted chracter goes past "z"', () => {
    const expected = "afcsb";
    const actual = caesar("Zebra", 1);
    console.log(`expect ${actual} to equal ${expected}`);
    expect(actual).to.equal(expected);
  });
  it("should allow for a negative shift", () => {
    const expected = "gdkkn";
    const actual = caesar("hello", -1);
    console.log(`expect expected: "${expected}" to equal actual: "${actual}"`);
    expect(actual).to.equal(expected);
  });
  it('should go end of the alphabet if the shifted chracter is before "a"', () => {
    const expected = "ydaqz";
    const actual = caesar("Zebra", -1);
    console.log(`expect ${actual} to equal ${expected}`);
    expect(actual).to.equal(expected);
  });
  it("should decoded a message if encode parameter is false", () => {
    const expected = "zebra";
    const actual = caesar("afcsb", 1, false);
    expect(actual).to.equal(expected);
  });
});
