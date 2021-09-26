const fileName = "agribalyse_210914";
const { EOL } = require("os");
const path = require("path");
const fs = require("fs");
const data = require(`./${fileName}.json`);

/*
EXPLORATION DES DONNEES
*/

// const groups = [];
// const subGroups = [];

// data.forEach((item,index) => {
//     if (!groups.includes(item.groupe)) {
//         groups.push(item.groupe)
//     }

//     if (!subGroups.includes(item.sous_groupe)) {
// 			subGroups.push(item.sous_groupe);
// 		}
// })

/* 
LISTE DES GROUPES 
*/

/*
[
  'boissons',
  'aliments infantiles',
  'fruits, légumes, légumineuses et oléagineux',
  'entrées et plats composés',
  'viandes, œufs, poissons',
  'produits céréaliers',
  'aides culinaires et ingrédients divers',
  'lait et produits laitiers',
  'matières grasses',
  'glaces et sorbets',
  'produits sucrés'
]
*/

/*
LISTE DES SOUS-GROUPES
*/

/*
[
  'boisson alcoolisées',
  'boissons sans alcool',
  'laits et boissons infantiles',
  'pommes de terre et autres tubercules',
  'plats composés',
  'viandes crues',
  'viandes cuites',
  'autres produits à base de viande',
  'pains et viennoiseries',
  'céréales de petit-déjeuner et biscuits',
  'sandwichs',
  'feuilletées et autres entrées',
  'charcuteries',
  'produits à base de poissons et produits de la mer',
  'pâtes, riz et céréales',
  'farines et pâtes à tarte',
  'fruits à coque et graines oléagineuses',
  'ingrédients divers',
  'mollusques et crustacés crus',
  'mollusques et crustacés cuits',
  'herbes',
  'épices',
  'sauces',
  'condiments',
  'sels',
  'algues',
  'aides culinaires',
  'fromages',
  'fruits',
  'légumes',
  'desserts infantiles',
  'céréales et biscuits infantiles',
  'huiles et graisses végétales',
  'beurres',
  'autres matières grasses',
  'margarines',
  'huiles de poissons',
  'eaux',
  'laits',
  'crèmes et spécialités à base de crème',
  'produits laitiers frais et assimilés',
  'petits pots salés et plats infantiles',
  'légumineuses',
  'œufs',
  'gâteaux et pâtisseries',
  'desserts glacés',
  'pizzas, tartes et crêpes salées',
  'salades composées et crudités',
  'soupes',
  'poissons cuits',
  'poissons crus',
  'chocolats et produits à base de chocolat',
  'confiseries non chocolatées',
  'sucres, miels et assimilés',
  'sorbets',
  'confitures et assimilés',
  'glaces',
  'denrées destinées à une alimentation particulière'
]
*/

/*
CHOIX DES GROUPES ET SOUS-GROUPES A RETENIR
*/

const relevantGroups = [
	"fruits, légumes, légumineuses et oléagineux",
	"produits céréaliers",
	"aides culinaires et ingrédients divers",
	"matières grasses",
];

const relevantSubGroups = [
	"pommes de terre et autres tubercules",
	// "pâtes, riz et céréales",
	"fruits à coque et graines oléagineuses",
	// "ingrédients divers",
	"herbes",
	// "épices",
	// "condiments",
	// "sels",
	// "algues",
	// "aides culinaires",
	"fruits",
	"légumes",
	// "huiles et graisses végétales",
	"légumineuses",
	// "salades composées et crudités",
];

// let relevantData = [];
// data.forEach((item) => {
// 	let done = false;

// 	relevantGroups.forEach((relGroup) => {
// 		relevantSubGroups.forEach((relSubGroup) => {
// 			if (
// 				relevantGroups.includes(item.groupe) &&
// 				relevantSubGroups.includes(item.sous_groupe) &&
// 				!done
// 			) {
// 				// SELECTION DES DATA A EXPORTER

// 				if (
// 					item.nom_francais.includes("cru") &&
// 					!item.nom_francais.includes("surgelé") &&
// 					// !item.nom_francais.includes("pelé") &&
// 					!item.nom_francais.includes("dénoyauté") &&
// 					!item.nom_francais.includes("sans peau") &&
// 					item.Preparation == "Pas de préparation"
// 				) {
// 					const formattedItem = {
// 						nom_francais: item.nom_francais, //split(',')[0],
// 						LCI_name: item.LCI_name,
// 						sous_groupe: item.sous_groupe,
// 						groupe: item.groupe,
// 						co2: item.impact_environnemental["Changement climatique"],
// 						avion: item.avion,
// 					};

// 					relevantData.push(formattedItem);
// 					done = true;
// 				}
// 			}
// 		});
// 	});
// });

// /*
// EXPORT EN JSON
// */
// fs.writeFileSync(
// 	path.resolve(__dirname, `vegetables_${fileName}.json`),
// 	JSON.stringify(relevantData),
// );

/*
EXPORT EN SQL
*/

const sqlFileName = __dirname + `/vegetables_${fileName}.sql`;
if (fs.existsSync(sqlFileName)) {
	fs.unlinkSync(__dirname + `/vegetables_${fileName}.sql`);
} else {
	console.log("No file deletion required");
}

const writeStream = fs.createWriteStream(sqlFileName, { flags: "a" });

writeStream.write(`CREATE TABLE "agribalyse_data" (
  id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name_fr TEXT NOT NULL,
  LCI_name TEXT NOT NULL,
  category TEXT NOT NULL,
  subcategory TEXT NOT NULL,
  co2_total DOUBLE PRECISION NOT NULL,
  co2_units DOUBLE PRECISION NOT NULL,
  co2_share_agriculture DOUBLE PRECISION NOT NULL,
  co2_share_transformation DOUBLE PRECISION NOT NULL,
  co2_share_packaging DOUBLE PRECISION NOT NULL,
  co2_share_transport DOUBLE PRECISION NOT NULL,
  co2_share_distribution DOUBLE PRECISION NOT NULL,
  co2_share_consumption DOUBLE PRECISION NOT NULL
)`);

// writeStream.write("2")
writeStream.write(
	`INSERT INTO "agribalyse_data" (name_fr, LCI_name, category, subcategory, co2_total, co2_units, co2_share_agriculture, co2_share_transformation, co2_share_packaging, co2_share_transport, co2_share_distribution, co2_share_consumption) VALUES`,
);
relevantData.forEach((item) => {
	writeStream.write(``);
});

writeStream.close();
