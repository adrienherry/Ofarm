const slugify = require("../slugify");

describe("slugify", function () {
	it("should trim leading and trailing spaces", function () {
		const input = "     trim   ";
		expect(slugify(input)).toBe("trim");
	});

	it("should replace spaces", function () {
		const input = "this sentence is full of spaces";
		expect(slugify(input)).toBe("this-sentence-is-full-of-spaces");
	});

	it("should lowercase", function () {
		const input = "PlEASe ReMOVe All uPPERCASE CHARActers";
		expect(slugify(input)).toBe("please-remove-all-uppercase-characters");
	});

	it("should remove special characters", function () {
		const input = "Here are some special characters:!?.;,%$£*µ&~èà+/";
		expect(slugify(input)).toBe("here-are-some-special-characters");
	});

	it("works", function () {
		expect(slugify("some text with spaces")).toBe("some-text-with-spaces");
	});
});
