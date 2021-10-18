const validate = {
	isValidAsInt: (strOrNumber) => {
		// if (typeof str != "string") return false;
		return (
			!isNaN(strOrNumber) &&
			!isNaN(Number.isInteger(Number(strOrNumber))) &&
			!strOrNumber.includes(" ")
		);
	},
};

module.exports = validate;
