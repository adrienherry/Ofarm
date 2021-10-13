const { isValidAsInt } = require("../validate");

describe("/app/helpers/validate/isValidAsInt", function () {
	it("", function () {
		expect(isValidAsInt("some text with spaces")).toBe(false);
	});
});
