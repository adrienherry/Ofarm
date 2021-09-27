require("dotenv").config();
let { data } = require("./00_species_images_id.json");

const fs = require("fs");
const axios = require("axios");

const imageUrl = (imageId) =>
	`https://api.unsplash.com/photos/${imageId}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`;

Promise.all(
	data.map((item) => {
		return !item.image_url && item.image_id
			? axios.get(imageUrl(item.image_id)).then((res) => {
					item["image_url"] = res.data.urls.small;
					return item;
			  })
			: item;
	}),
).then((res) =>
	fs.writeFile(
		__dirname + "/output_data.json",
		JSON.stringify(res),
		"utf8",
		(err) => {
			if (err) {
				return console.log(err);
			}
		},
	),
);
