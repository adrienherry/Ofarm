const standardErrors = {
	BadRequestError: { error: "Requête incorrecte." },
	
	UserAlreadyExistsError: {
		error: "Cet identifiant ou cet email sont déjà pris.",
	},

	WrongUsernameOrPasswordError: {
		error: "Identifiant ou mot de passe incorrect.",
	},

	UserNotLoggedError: {
		error: "Vous devez être connecté pour accéder à cette page.",
	},

	GardenNotFoundError: { error: "Aucun jardin ne correspond à cet ID." },
	
	SpeciesAlreadyExistsInGardenError: {
		error: "Ce jardin contient déjà cette espèce.",
	},
	
	SpeciesDoesNotExistError: { error: "Cette espèce n'existe pas." },
	
	FailedUpdateError: (param) => {
		console.log("Erreur durant la mise à jour: " + param);
		return {
			error: `Mise à jour échouée: ${param} mis à jour !`,
		};
	},

	FailedDeleteError: (param) => {
		console.log("Erreur durant la suppression: " + param);
		return {
			error: `Suppression échouée: ${param} supprimé !`,
		};
	},

	SpeciesNotInGardenError: {
		error: "Ce jardin ne contient pas cette espèce.",
	},
};

module.exports = standardErrors;
