const fs = require("fs");
const species = require("./species_agribalyse.json");
const users = require("./users.json");
const eventTypes = require("./eventType.json");
const gardens = require("./gardens.json");
const colors = require("./colors.json");

const sqlFilename = __dirname + `/01_seed_agribalyse.sql`;

const water_need_array = ["faible", "moyen", "fort"];
const exposition_array = ["ombre", "mi-ombre", "ensoleillée", "plein soleil"];
const culture_type_array = ["en pot", "en serre", "en pleine terre"];
const soil_type_array = [
	"argileux",
	"caillouteux",
	"calcaire",
	"drainé",
	"frais",
	"humide",
	"lourd",
	"humifère",
	"léger",
	"meuble",
	"réchauffé",
	"riche",
	"sableux",
	"tout type",
];

const formatTextForSql = (str) => str.split("'").join("''");

const reformatDate = (str) => {
	[day, month, year] = str.split("-");
	return year + "-" + month + "-" + day;
};

if (fs.existsSync(sqlFilename)) {
	fs.unlinkSync(sqlFilename);
} else {
	console.log("No file deletion required");
}

const writeStream = fs.createWriteStream(sqlFilename, { flags: "a" });
writeStream.write("BEGIN;\n");

// USER TABLE

writeStream.write(
	`INSERT INTO "user" (username,email,hashed_password) VALUES\n`,
);

users.forEach((item, index) => {
	writeStream.write(
		`('${item.username}','${item.email}','${item.hashed_password}')` +
			(index !== users.length - 1 ? "," : ";") +
			"\n",
	);
});
writeStream.write("\n");

// EVENT_TYPE TABLE

writeStream.write(`INSERT INTO "event_type" (name, color) VALUES\n`);

eventTypes.forEach((item, index) => {
	writeStream.write(
		`('${formatTextForSql(item.name)}', '${item.color}')` +
			(index !== eventTypes.length - 1 ? "," : ";") +
			"\n",
	);
});
writeStream.write("\n");

// WATER NEED TABLE

writeStream.write(`INSERT INTO "water_need" (name, value) VALUES\n`);

water_need_array.forEach((item, index) => {
	writeStream.write(
		`('${formatTextForSql(item)}', ${index + 1})` +
			(index !== water_need_array.length - 1 ? "," : ";") +
			"\n",
	);
});
writeStream.write("\n");

// CULTURE TYPE TABLE

writeStream.write(`INSERT INTO "culture_type" (name) VALUES\n`);

culture_type_array.forEach((item, index) => {
	writeStream.write(
		`('${formatTextForSql(item)}')` +
			(index !== culture_type_array.length - 1 ? "," : ";") +
			"\n",
	);
});
writeStream.write("\n");

// EXPOSITION TABLE

writeStream.write(`INSERT INTO "exposition" (name, value) VALUES\n`);

exposition_array.forEach((item, index) => {
	writeStream.write(
		`('${formatTextForSql(item)}', ${index + 1})` +
			(index !== exposition_array.length - 1 ? "," : ";") +
			"\n",
	);
});
writeStream.write("\n");

// SOIL TYPE TABLE

writeStream.write(`INSERT INTO "soil_type" (name) VALUES\n`);

soil_type_array.forEach((item, index) => {
	writeStream.write(
		`('${formatTextForSql(item)}')` +
			(index !== soil_type_array.length - 1 ? "," : ";") +
			"\n",
	);
});
writeStream.write("\n");

// SPECIES TABLE

writeStream.write(`INSERT INTO "species" (name,description,image_url,color,co2_data) VALUES\n`);

species.forEach((item, index) => {
	const co2_data = item.co2_data
		? JSON.stringify(item.co2_data).replace("'", "''")
		: JSON.stringify(null);
	const color = colors[index];
	writeStream.write(
		`('${formatTextForSql(item.name)}',
		'${formatTextForSql(item.description)}',
		'${item.image_url}',
		'${color}',
		'${co2_data}'::JSON)` +
			(index !== species.length - 1 ? "," : ";") +
			"\n",
	);
});
writeStream.write("\n");

// EVENTS TABLE

writeStream.write(
	`INSERT INTO "event" (event_type_id,species_id,from_date,until_date,option_name) VALUES\n`,
);

species.forEach((speciesItem, speciesIndex) => {
	if (speciesItem.options) {
		speciesItem.options.forEach((option, optionIndex) => {
			const eventList = ["saw_in", "saw_out", "transplant", "harvest"];

			eventList.forEach((eventName, eventNameIndex) => {
				// saw_in is 1, saw_out is 2, etc., in database.
				const eventTypeId = eventNameIndex + 1;

				speciesItem.options[optionIndex][eventName].length > 0 &&
					speciesItem.options[optionIndex][eventName].forEach(
						(eventInterval, eventIntervalIndex) => {
							writeStream.write(
								`(${eventTypeId},${speciesItem.id},'${reformatDate(
									eventInterval[0],
								)}','${reformatDate(eventInterval[1])}','${option.name}')` +
									(speciesIndex !== species.length - 1 ||
									eventNameIndex !== eventList.length ||
									eventIntervalIndex !== speciesItem[eventName].length - 1
										? ","
										: ";") +
									"\n",
							);
						},
					);
			});
		});
	} else {
		const eventList = ["saw_in", "saw_out", "transplant", "harvest"];

		eventList.forEach((eventName, eventNameIndex) => {
			// saw_in is 1, saw_out is 2, etc., in database.
			const eventTypeId = eventNameIndex + 1;
			// console.log(speciesItem)
			speciesItem[eventName].length > 0 &&
				speciesItem[eventName].forEach((eventInterval, eventIntervalIndex) => {
					reformatDate(eventInterval[0]);
					writeStream.write(
						`(${eventTypeId},${speciesItem.id},'${reformatDate(
							eventInterval[0],
						)}','${reformatDate(eventInterval[1])}','default')` +
							(speciesIndex !== species.length - 1 ||
							eventNameIndex !== eventList.length - 1 ||
							eventIntervalIndex !== speciesItem[eventName].length - 1
								? ","
								: ";") +
							"\n",
					);
				});
		});
	}
});
writeStream.write("\n");

// GARDEN TABLE

writeStream.write(`INSERT INTO "garden" (name,user_id) VALUES\n`);

gardens.forEach((item, index) => {
	writeStream.write(
		`('${formatTextForSql(item.name)}',${item.user_id})` +
			(index !== gardens.length - 1 ? "," : ";") +
			"\n",
	);
});
writeStream.write("\n");

// GARDEN_SPECIES TABLE

writeStream.write(
	`INSERT INTO "garden_species" (garden_id,species_id) VALUES\n`,
);

gardens.forEach((item, gardenIndex) => {
	item.species.forEach((species_id, speciesIndex) => {
		writeStream.write(
			`(${gardenIndex + 1},${species_id})` +
				(gardenIndex !== gardens.length - 1 ||
				speciesIndex !== item.species.length - 1
					? ","
					: ";") +
				"\n",
		);
	});
});
writeStream.write("\n");

// EXPOSITION_SPECIES TABLE

writeStream.write(
	`INSERT INTO "exposition_species" (exposition_id, species_id) VALUES\n`,
);

species.forEach((item, speciesIndex) => {
	item.exposition.forEach((expItem, expIndex) => {
		writeStream.write(
			`((SELECT id FROM "exposition" WHERE name='${expItem}'),${item.id})` +
				(expIndex !== item.exposition.length - 1 ||
				speciesIndex !== species.length - 1
					? ","
					: ";") +
				"\n",
		);
	});
});
writeStream.write("\n");

// SOIL_TYPE_SPECIES TABLE

writeStream.write(
	`INSERT INTO "soil_type_species" (soil_type_id, species_id) VALUES\n`,
);

species.forEach((item, speciesIndex) => {
	item.soil_type.forEach((soilItem, soilIndex) => {
		writeStream.write(
			`((SELECT id FROM "soil_type" WHERE name='${soilItem}'),${item.id})` +
				(soilIndex !== item.soil_type.length - 1 ||
				speciesIndex !== species.length - 1
					? ","
					: ";") +
				"\n",
		);
	});
});
writeStream.write("\n");

// SPECIES_WATER_NEED TABLE

writeStream.write(
	`INSERT INTO "species_water_need" (water_need_id, species_id) VALUES\n`,
);

species.forEach((item, speciesIndex) => {
	item.water_need.forEach((waterItem, waterIndex) => {
		writeStream.write(
			`((SELECT id FROM "water_need" WHERE name='${waterItem}'),${item.id})` +
				(waterIndex !== item.water_need.length - 1 ||
				speciesIndex !== species.length - 1
					? ","
					: ";") +
				"\n",
		);
	});
});
writeStream.write("\n");

// CULTURE_TYPE_SPECIES TABLE

writeStream.write(
	`INSERT INTO "culture_type_species" (culture_type_id, species_id) VALUES\n`,
);

species.forEach((item, speciesIndex) => {
	item.culture.forEach((cultureItem, cultureIndex) => {
		writeStream.write(
			`((SELECT id FROM "culture_type" WHERE name='${cultureItem}'),${item.id})` +
				(cultureIndex !== item.culture.length - 1 ||
				speciesIndex !== species.length - 1
					? ","
					: ";") +
				"\n",
		);
	});
});
writeStream.write("\n");

writeStream.write("\n");

writeStream.write("COMMIT;\n");

writeStream.close();

console.log("SQL file generation : complete!");
