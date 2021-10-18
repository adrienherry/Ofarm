const supertest = require("supertest");
const { toBeArray, toBeObject } = require("jest-extended");
const { slugify } = require("../helpers");

const app = require("../../index.js");

const baseUrl = "/api/v1";
const agriData = require("../seed/generateData/species_agribalyse.json");

describe("#speciesController", () => {
	describe("GET /species", function () {
		it("should return with a 200 status code and data in JSON format", async function () {
			const response = await supertest(app).get(baseUrl + "/species");

			expect(response.headers["content-type"]).toEqual(
				expect.stringContaining("json"),
			);

			expect(response.statusCode).toEqual(200);
		});

		it("should return an array of valid Species objects with their associated fields", async () => {
			const response = await supertest(app).get(baseUrl + "/species");

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
				expect(item.color).toBeDefined();

				expect(item.events).toBeDefined();
				expect(item.events).toBeArray();

				expect(item.events[0]).toBeObject();
				expect(item.events[0].eventType).toBeDefined();

				expect(item.soil).toBeDefined();
				expect(item.soil).toBeArray();

				expect(item.exposition).toBeDefined();
				expect(item.exposition).toBeArray();

				// expect(item.waterNeed).toBeDefined();
				// expect(item.waterNeed).toBeArray();

				expect(item.culture).toBeDefined();
				expect(item.culture).toBeArray();

				if (item.co2Data) {
					// expect(item.co2Data.originalName).toBeDefined();
					// expect(item.co2Data.shortName).toBeDefined();
					// expect(item.co2Data.LCIName).toBeDefined();
					// expect(item.co2Data.category).toBeDefined();
					// expect(item.co2Data.subcategory).toBeDefined();
					// expect(item.co2Data.co2Total).toBeDefined();
					// expect(item.co2Data.co2Share).toBeDefined();
					// expect(item.co2Data.co2units).toBeDefined();
				}
			});
		});
	});

	describe("GET /species/:id", () => {
		it("should return with a 200 status code with a single species", async () => {
			const response = await supertest(app).get(baseUrl + "/species/1");
			expect(response.headers["content-type"]).toEqual(
				expect.stringContaining("json"),
			);

			expect(response.statusCode).toEqual(200);

			const item = response.body;
			expect(item).toBeObject();

			const foundInData = agriData.find(
				(agriItem) => item.name === agriItem.name,
			);

			expect(item.id).toBe(foundInData.id);
			expect(item.name).toEqual(foundInData.name);
			expect(item.imageUrl).toEqual(foundInData.image_url);
			expect(item.description).toEqual(foundInData.description);
			expect(item.color).toBeDefined();
		});

		it("should return null if the provided id has no match", async () => {
			const response = await supertest(app).get(baseUrl + "/species/0");
			expect(response.headers["content-type"]).toEqual(
				expect.stringContaining("json"),
			);

			const item = response.body;
			expect(item).toBeNull();
		});

		it.skip("should return an error if the provided id is not a number", async () => {
			const response = await supertest(app).get(baseUrl + "/species/a");
			expect(response.headers["content-type"]).toEqual(
				expect.stringContaining("json"),
			);
			console.log(response.statusCode)
			expect(response.statusCode).toEqual(403);
		});

		// it("should return an error if the provided id includes spaces or special characters", async () => {
		// 	const response = await supertest(app)
		// 		.get(baseUrl + "/species/ 1+");
		// 	expect(response.headers["content-type"]).toEqual(
		// 		expect.stringContaining("json"),
		// 	);
		// 	expect(response.statusCode).toEqual(403);
		// });
	});
});
