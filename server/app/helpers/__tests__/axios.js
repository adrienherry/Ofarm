// const f = async (term) => {
// 	const response = await axios.get("https://api.unsplash.com/search/photos", {
// 		params: {
// 			client_id: "",
// 			query: term,
// 		},
// 	});

// 	return response.data;
// };

const axios = require("axios");

describe("mock axios", () => {
	it("calls mock axios with no params", async () => {
		const data = await axios.get("");
	});
});
