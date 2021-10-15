// const f = async (term) => {
// 	const response = await axios.get("https://api.unsplash.com/search/photos", {
// 		params: {
// 			client_id: "",
// 			query: term,
// 		},
// 	});

// 	return response.data;
// };

const mockAxios = require("axios");

describe("mock axios", () => {
	it("calls mock axios with no params", async () => {
		mockAxios.get.mockImplementationOnce(
			() =>
				new Promise((resolve, reject) =>
					resolve({
						data: {
							results: ["someImg.png"],
						},
					}),
				),
		);

		const response = await mockAxios.get("cats");
		expect(response.data).toEqual({ results: ["someImg.png"] });
		expect(mockAxios.get).toHaveBeenCalledTimes(1);
		expect(mockAxios.get).toHaveBeenCalledWith("cats");
	});
});
