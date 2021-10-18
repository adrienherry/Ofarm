const { isValidAsInt } = require("../validate");

describe("#isValidAsInt", function () {
	it("should return false for a non-numeric value", function () {
		expect(isValidAsInt("some text with spaces")).toBe(false);
	});

	it("should return false for a number written in letters", function () {
		expect(isValidAsInt("five")).toBe(false);
	});

	it("should return false for a valid int with leading space", function () {
		expect(isValidAsInt(" 6")).toBe(false);
	});

	it("should return true for a valid int with trailing space", function () {
		expect(isValidAsInt("6 ")).toBe(false);
	});

	it("should return true for a valid int without spaces", function () {
		expect(isValidAsInt(" 6")).toBe(false);
	});

	it("should return false if given two valid numbers separated with a space", function () {
		expect(isValidAsInt("456 78")).toEqual(false);
	});

	it("should work on negative numbers", function () {
		expect(isValidAsInt("-10")).toEqual(true);
	});
});
