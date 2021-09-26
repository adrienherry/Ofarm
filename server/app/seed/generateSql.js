const fs = require("fs");
const species = require("./species_agribalyse.json");
const users = require("./users.json");
const eventTypes = require("./eventType.json");
const gardens = require("./gardens.json");

const sqlFilename = __dirname + `/01_seed_agribalyse.sql`;
const writeStream = fs.createWriteStream(sqlFilename, { flags: "a" });

const formatTextForSql = (str) => str.replace("'", "''");

const reformatDate = (str) => {
	[day, month, year] = str.split("-");
	return year + "-" + month + "-" + day;
};

if (fs.existsSync(sqlFilename)) {
	fs.unlinkSync(sqlFilename);
} else {
	console.log("No file deletion required");
}

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

writeStream.write(`INSERT INTO "event_type" (name) VALUES\n`);

eventTypes.forEach((item, index) => {
	writeStream.write(
		`('${formatTextForSql(item.name)}')` +
			(index !== eventTypes.length - 1 ? "," : ";") +
			"\n",
	);
});
writeStream.write("\n");

// SPECIES TABLE

writeStream.write(`INSERT INTO "species" (name,image_url) VALUES\n`);

species.forEach((item, index) => {
	writeStream.write(
		`('${formatTextForSql(item.name)}','${item.image_url}')` +
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

writeStream.write("COMMIT;\n");

writeStream.close();
