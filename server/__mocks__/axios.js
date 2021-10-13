module.exports = {
	get: jest.fn(() =>
		Promise.resolve({
			data: {
				results: ["photoDeChat.png"],
			},
		}),
	),
};
