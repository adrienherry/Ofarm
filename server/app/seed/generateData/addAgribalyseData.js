const species = require("./species.json");
const agribalyse = require("./agribalyse/vegetables_agribalyse_210914.json");

const fs = require("fs");

const mergedData = [...species];
mergedData.forEach((speciesItem, index) => {
	const found = agribalyse.find((agriData) =>
		agriData.nom_francais
			.toLowerCase()
			.includes(speciesItem.name.toLowerCase()),
	);

	if (found) {
		console.log(
			index,
			speciesItem.name + " : ",
			found.nom_francais.split(",")[0].split("(")[0].trim(),
		);

		const shortName = found.nom_francais.split(",")[0].split("(")[0].trim();

		speciesItem["co2_data"] = {
			originalName: found.nom_francais,
			shortName: shortName,
			LCIName: found.LCI_name,
			category: found.groupe,
			subcategory: found.sous_groupe,
			co2Total: found.co2.synthese,
			co2Units: found.co2.unite,
			co2Share: {
				agriculture: found.co2.etapes["Agriculture"],
				transform: found.co2.etapes["Transformation"],
				packaging: found.co2.etapes["Emballage"],
				transport: found.co2.etapes["Transport"],
				distribution: found.co2.etapes["Supermarché et distribution"],
				consumption: found.co2.etapes.Consommation,
			},
		};
	}
});

const outputFilename = __dirname + `/species_agribalyse.json`;
if (fs.existsSync(outputFilename)) {
	fs.unlinkSync(outputFilename);
} else {
	console.log("No file deletion required");
}

fs.writeFile(outputFilename, JSON.stringify(mergedData), "utf8", (err) => {
	if (err) {
		return console.log(err);
	}
});