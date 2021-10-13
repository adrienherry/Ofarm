const validate = {
	isValidAsInt: (strOrNumber) => {
		// if (typeof str != "string") return false;
		return !isNaN(strOrNumber) && !isNaN(parseFloat(strOrNumber));
    },
};

module.exports = validate;
