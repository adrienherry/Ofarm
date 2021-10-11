import React, { useState, useEffect, useRef } from "react";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";

import "./edit-garden.scss";
import GardenMap from "./GardenMap";
import GardenCalendar from "./GardenCalendar";

// Exemple de réponse reçue via GET - /api/v1/garden/:garden_id/field
const data = [
	{
		id: 1,
		shape: {
			crs: {
				type: "name",
				properties: {
					name: "EPSG:4326",
				},
			},
			type: "Polygon",
			coordinates: [
				[
					[1.4753678441047668, 43.57896855312307],
					[1.4760062098503113, 43.579788518493125],
					[1.476617753505707, 43.57954758195996],
					[1.4764246344566347, 43.57934550541453],
					[1.4766016602516177, 43.57926001128732],
					[1.4764353632926943, 43.579151200404375],
					[1.4765051007270815, 43.579085136558064],
					[1.476387083530426, 43.578972439241184],
				],
			],
		},
		gardenId: 1,
		garden: {
			id: 1,
			name: "Premier jardin de Florian",
			nameSlug: "premier-jardin-de-florian",
			userId: 1,
			species: [
				{
					id: 1,
					name: "Aubergine",
					nameSlug: "aubergine",
					imageUrl:
						"https://images.unsplash.com/photo-1613881553903-4543f5f2cac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1NzgzNTc&ixlib=rb-1.2.1&q=80&w=400",
					co2Data: {
						original_name: "Aubergine, crue",
						short_name: "Aubergine",
						LCI_name: "Eggplant, raw",
						category: "fruits, légumes, légumineuses et oléagineux",
						subcategory: "légumes",
						co2_total: 5.3103591,
						co2_units: "kg CO2 eq/kg de produit",
						co2_share: {
							agriculture: 5.0919415,
							transform: 0,
							packaging: 0,
							transport: 0.16952471,
							distribution: 0.036575546,
							consumption: 0.012317297,
						},
					},
					color: "#477675",
					description:
						"L’aubergine (Solanum melongena L.) est une plante dicotylédone de la famille des Solanaceae. Le terme aubergine désigne la plante et le fruit. Elle est originaire d'Asie et constitue avec les aubergines africaines: S. aethiopicum L., aubergine amère, ou gilo, et S. macrocarpon L., ou gboma, les trois espèces d'aubergines cultivées. L'aubergine est un légume-fruit riche en composés phénoliques et alcaloïdes antioxydants aux effets favorables sur le syndrome métabolique, elle est l'objet de nombreuses publications scientifiques.",
				},
				{
					id: 6,
					name: "Concombre",
					nameSlug: "concombre",
					imageUrl:
						"https://images.unsplash.com/photo-1523349462262-054f5b3aa500?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400",
					co2Data: {
						original_name: "Concombre, pulpe et peau, cru",
						short_name: "Concombre",
						LCI_name: "Cucumber, pulp and peel, raw",
						category: "fruits, légumes, légumineuses et oléagineux",
						subcategory: "légumes",
						co2_total: 4.8565886,
						co2_units: "kg CO2 eq/kg de produit",
						co2_share: {
							agriculture: 4.5332143,
							transform: 0,
							packaging: 0,
							transport: 0.18387334,
							distribution: 0.03993612,
							consumption: 0.099564814,
						},
					},
					color: "#d646c5",
					description:
						"Le concombre (Cucumis sativus) est une plante potagère herbacée, rampante, de la même famille que la calebasse africaine, le melon ou la courge (famille des Cucurbitacées). C'est botaniquement un fruit qui est consommé comme un légume. Il est de la même espèce (Cucumis sativus) que le cornichon, consommé lui comme condiment. La plante, qui poussait naturellement au pied de l'Himalaya, aurait été domestiquée pour la première fois en Inde il y a au moins 3 000 ans.",
				},
				{
					id: 11,
					name: "Laitue",
					nameSlug: "laitue",
					imageUrl:
						"https://images.unsplash.com/photo-1549736624-81a2ca809ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjI4MTF8MHwxfGFsbHx8fHx8fHx8fDE2MzI1Nzg5MTU&ixlib=rb-1.2.1&q=80&w=400",
					co2Data: {
						original_name: "Laitue, crue",
						short_name: "Laitue",
						LCI_name: "Lettuce, raw",
						category: "fruits, légumes, légumineuses et oléagineux",
						subcategory: "légumes",
						co2_total: 0.88251448,
						co2_units: "kg CO2 eq/kg de produit",
						co2_share: {
							agriculture: 0.31309977,
							transform: 0,
							packaging: 0,
							transport: 0.2272488,
							distribution: 0.076659738,
							consumption: 0.26550617,
						},
					},
					color: "#e4bf30",
					description:
						"La Laitue (Lactuca), au sens botanique du terme, est un genre de plantes annuelles et bisannuelles de la famille des Astéracées (Composées) dont certaines espèces sont cultivées pour leurs feuilles tendres consommées comme salade verte. Ce genre comprend plus de 100 espèces. La laitue la plus cultivée est la laitue cultivée (Lactuca sativa) à partir de laquelle les jardiniers ont sélectionné de nombreuses variétés et cultivars.",
				},
				{
					id: 16,
					name: "Panais",
					nameSlug: "panais",
					imageUrl:
						"https://cdn.pixabay.com/photo/2018/12/07/02/06/parsnips-3860993_960_720.jpg",
					co2Data: {
						original_name: "Panais, cru",
						short_name: "Panais",
						LCI_name: "Parsnip, raw",
						category: "fruits, légumes, légumineuses et oléagineux",
						subcategory: "légumes",
						co2_total: 0.38690672,
						co2_units: "kg CO2 eq/kg de produit",
						co2_share: {
							agriculture: 0.087677241,
							transform: 0,
							packaging: 0,
							transport: 0.1704366,
							distribution: 0.029228063,
							consumption: 0.099564814,
						},
					},
					color: "#d63b66",
					description:
						"Le Panais (Pastinaca sativa L.) est une espèce de plante herbacée bisannuelle à racine charnue originaire d'Europe1, appartenant à la famille des Apiacées. Il fut autrefois très cultivé comme légume et comme plante fourragère. Le panais, détrôné par la pomme de terre, est de retour sur la table française depuis la fin du xxe siècle à la suite de sa réintroduction sur les étals par les maraîchers biologiques et l'engouement pour les légumes anciens. Le panais, d'une couleur blanc ivoire, a une forme proche de celle de la carotte, et un goût légèrement sucré, noiseté, avec un arôme épicé.",
				},
			],
		},
	}
];

const EditGarden = () => {
	const [modalIsOpen, setOpenModal] = useState(false);
	// const modalRef = useRef();
	const [modalDate, setModalDate] = useState(null);
	const [modalEvents, setModalEvents] = useState(null);

	const handleOnDayClick = (date, events) => {
		setModalEvents(events);
		setModalDate(date);
		setOpenModal(true);
	};

	// useEffect(() => {
	// 	if (modalIsOpen) {
	// 		modalRef.current.classList.remove("hidden");
	// 	} else {
	// 		modalRef.current.classList.add("hidden");
	// 	}
	// }, [modalIsOpen]);

	return (
		<div className="edit-garden">
			<Grid container justifyContent="center">
				<Grid item>
					<h1>Mon jardin : nom de mon jardin</h1>
				</Grid>
			</Grid>

			<Grid container justifyContent="center">
				{/* <Grid item xs={5}>
					<GardenCalendar gardenData={data} onDayClick={handleOnDayClick} />
				</Grid> */}

				{/* <Grid item> */}
				<GardenMap className="garden-map" data={data} />
				{/* </Grid> */}
			</Grid>

			{/* <div ref={modalRef} className="modal">
				<form className="modalContent">
					<button className="close-button" onClick={() => setOpenModal(false)}>
						Fermer la modale
					</button>

					<h1>Evènements prévus le {JSON.stringify(modalDate)}</h1>
					<div className="eventList">
						{modalEvents &&
							modalEvents.map((modalEvent) => {
								console.log(modalEvent);
								return (
									<div className="eventContainer">
										<div className="eventSpecies">{modalEvent.species}</div>
										<div className="eventName">{modalEvent.name}</div>
										<div className="eventFrom">
											<input
												onDoubleClick={() =>
													(e.target.style.disabled = !e.target.style.disabled)
												}
												type="text"
												disabled
												value={JSON.stringify(modalEvent.startDate)}
											/>
										</div>
										<div className="eventUntil">
											<input
												onDoubleClick={() => {
													console.log(e.target.style.disabled)
													e.target.style.disabled = !e.target.style.disabled;
												}}
												type="text"
												disabled
												value={JSON.stringify(modalEvent.endDate)}
											/>
										</div>
									</div>
								);
							})}
						
						<button className="sendFormButton">Enregistrer mes modifications</button>
					</div>
				</form>
			</div> */}
		</div>
	);
};

export default EditGarden;
