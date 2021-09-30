const standardErrors = {
	InternalServerError: {error: "Erreur serveur interne."},
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

	GardenNameAlreadyExists: {error: "Vous possédez déjà un jardin avec ce nom."},
	
	SpeciesAlreadyExistsInGardenError: {
		error: "Ce jardin contient déjà cette espèce.",
	},
	
	SpeciesDoesNotExistError: { error: "Cette espèce n'existe pas." },
	
	FailedCreateError: {
		error: "Echec durant la création."
	},

	UserTokenExpired: {
		error : "Session expirée. Veuillez vous reconnecter."
	},

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
