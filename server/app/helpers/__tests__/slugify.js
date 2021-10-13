const slugify = require("../slugify");

describe("/app/helpers/slugify", function () {
	it("works", function () {
		expect(slugify("some text with spaces")).toBe("some-text-with-spaces");
	});
});
