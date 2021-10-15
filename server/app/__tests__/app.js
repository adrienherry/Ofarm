const supertest = require("supertest");
const { toBeArray, toBeObject } = require("jest-extended");
const { slugify } = require("../helpers");

const app = require("../../index.js");

const baseUrl = "/api/v1";
const agriData = require("../seed/generateData/species_agribalyse.json");

describe("GET /species", () => {
	it("should return with a 200 status code and valid data", async () => {
		const response = await supertest(app).get(baseUrl + "/species");
		expect(response.headers["content-type"]).toEqual(
			expect.stringContaining("json"),
		);

		expect(response.body).toBeArray();
		response.body.forEach((item) => {
			expect(item).toBeObject();

			const foundInData = agriData.find(
				(agriItem) => item.name === agriItem.name,
			);

			expect(item.id).toBe(foundInData.id);
			expect(item.name).toEqual(foundInData.name);
			expect(item.imageUrl).toEqual(foundInData.image_url);
			expect(item.description).toEqual(foundInData.description);
		});
	});
});

describe("GET /species/:id", () => {
	it("should return with a 200 status code with a single species", async () => {
		const response = await supertest(app).get(baseUrl + "/species/1");
		expect(response.headers["content-type"]).toEqual(
			expect.stringContaining("json"),
		);

		const item = response.body;
		expect(item).toBeObject();

		const foundInData = agriData.find(
			(agriItem) => item.name === agriItem.name,
		);

		expect(item.id).toBe(foundInData.id);
		expect(item.name).toEqual(foundInData.name);
		expect(item.imageUrl).toEqual(foundInData.image_url);
		expect(item.description).toEqual(foundInData.description);
	});
});

it("should return null if the provided id has no match", async () => {
	const response = await supertest(app).get(baseUrl + "/species/0");
	expect(response.headers["content-type"]).toEqual(
		expect.stringContaining("json"),
	);

	const item = response.body;
	expect(item).toBeNull();
});

it("should return an error if the provided id is invalid", async () => {
	const response = await supertest(app).get(baseUrl + "/species/0");
	expect(response.headers["content-type"]).toEqual(
		expect.stringContaining("json"),
	);
});
// });
