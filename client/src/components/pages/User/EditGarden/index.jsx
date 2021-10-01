import React, { useState, useEffect, useRef } from "react";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";

import "./edit-garden.scss";
import GardenMap from "./GardenMap";
import GardenCalendar from "./GardenCalendar";

const data = {
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
			color: "#ffffff00",
			description: null,
			events: [
				{
					id: 1,
					optionName: "default",
					fromDate: "2000-02-01",
					untilDate: "2000-05-01",
					eventType: {
						id: 1,
						name: "Semis sous abri",
						nameSlug: "semis-sous-abri",
					},
				},
				{
					id: 2,
					optionName: "default",
					fromDate: "2000-04-01",
					untilDate: "2000-06-01",
					eventType: {
						id: 2,
						name: "Semis en pleine terre",
						nameSlug: "semis-en-pleine-terre",
					},
				},
				{
					id: 3,
					optionName: "default",
					fromDate: "2000-04-01",
					untilDate: "2000-07-01",
					eventType: {
						id: 3,
						name: "Repiquage",
						nameSlug: "repiquage",
					},
				},
				{
					id: 4,
					optionName: "default",
					fromDate: "2000-07-01",
					untilDate: "2000-11-01",
					eventType: {
						id: 4,
						name: "Récolte",
						nameSlug: "recolte",
					},
				},
			],
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
			color: "#ffffff00",
			description: null,
			events: [
				{
					id: 19,
					optionName: "default",
					fromDate: "2000-03-01",
					untilDate: "2000-05-01",
					eventType: {
						id: 1,
						name: "Semis sous abri",
						nameSlug: "semis-sous-abri",
					},
				},
				{
					id: 20,
					optionName: "default",
					fromDate: "2000-04-01",
					untilDate: "2000-07-01",
					eventType: {
						id: 2,
						name: "Semis en pleine terre",
						nameSlug: "semis-en-pleine-terre",
					},
				},
				{
					id: 21,
					optionName: "default",
					fromDate: "2000-03-15",
					untilDate: "2000-05-16",
					eventType: {
						id: 3,
						name: "Repiquage",
						nameSlug: "repiquage",
					},
				},
				{
					id: 22,
					optionName: "default",
					fromDate: "2000-06-01",
					untilDate: "2000-11-01",
					eventType: {
						id: 4,
						name: "Récolte",
						nameSlug: "recolte",
					},
				},
			],
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
			color: "#ffffff00",
			description: null,
			events: [
				{
					id: 35,
					optionName: "printemps",
					fromDate: "2000-02-01",
					untilDate: "2000-05-01",
					eventType: {
						id: 1,
						name: "Semis sous abri",
						nameSlug: "semis-sous-abri",
					},
				},
				{
					id: 36,
					optionName: "printemps",
					fromDate: "2000-04-01",
					untilDate: "2000-05-16",
					eventType: {
						id: 3,
						name: "Repiquage",
						nameSlug: "repiquage",
					},
				},
				{
					id: 37,
					optionName: "printemps",
					fromDate: "2000-05-01",
					untilDate: "2000-07-01",
					eventType: {
						id: 4,
						name: "Récolte",
						nameSlug: "recolte",
					},
				},
				{
					id: 38,
					optionName: "été",
					fromDate: "2000-04-01",
					untilDate: "2000-07-01",
					eventType: {
						id: 2,
						name: "Semis en pleine terre",
						nameSlug: "semis-en-pleine-terre",
					},
				},
				{
					id: 39,
					optionName: "été",
					fromDate: "2000-06-01",
					untilDate: "2000-08-01",
					eventType: {
						id: 3,
						name: "Repiquage",
						nameSlug: "repiquage",
					},
				},
				{
					id: 40,
					optionName: "été",
					fromDate: "2000-07-01",
					untilDate: "2000-09-01",
					eventType: {
						id: 4,
						name: "Récolte",
						nameSlug: "recolte",
					},
				},
				{
					id: 41,
					optionName: "automne",
					fromDate: "2000-07-01",
					untilDate: "2000-09-01",
					eventType: {
						id: 2,
						name: "Semis en pleine terre",
						nameSlug: "semis-en-pleine-terre",
					},
				},
				{
					id: 42,
					optionName: "automne",
					fromDate: "2000-08-01",
					untilDate: "2000-09-01",
					eventType: {
						id: 3,
						name: "Repiquage",
						nameSlug: "repiquage",
					},
				},
				{
					id: 43,
					optionName: "automne",
					fromDate: "2000-09-01",
					untilDate: "2000-11-01",
					eventType: {
						id: 4,
						name: "Récolte",
						nameSlug: "recolte",
					},
				},
				{
					id: 44,
					optionName: "hiver",
					fromDate: "2000-08-01",
					untilDate: "2000-11-01",
					eventType: {
						id: 2,
						name: "Semis en pleine terre",
						nameSlug: "semis-en-pleine-terre",
					},
				},
				{
					id: 45,
					optionName: "hiver",
					fromDate: "2000-10-01",
					untilDate: "2000-11-01",
					eventType: {
						id: 3,
						name: "Repiquage",
						nameSlug: "repiquage",
					},
				},
				{
					id: 46,
					optionName: "hiver",
					fromDate: "2000-03-01",
					untilDate: "2000-06-01",
					eventType: {
						id: 4,
						name: "Récolte",
						nameSlug: "recolte",
					},
				},
			],
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
			color: "#ffffff00",
			description: null,
			events: [
				{
					id: 60,
					optionName: "default",
					fromDate: "2000-02-15",
					untilDate: "2000-07-01",
					eventType: {
						id: 2,
						name: "Semis en pleine terre",
						nameSlug: "semis-en-pleine-terre",
					},
				},
				{
					id: 61,
					optionName: "default",
					fromDate: "2000-05-01",
					untilDate: "2000-10-01",
					eventType: {
						id: 4,
						name: "Récolte",
						nameSlug: "recolte",
					},
				},
			],
		},
	],
};

const EditGarden = () => {
	const [modalIsOpen, setOpenModal] = useState(false);
	const modalRef = useRef();
	const [modalDate, setModalDate] = useState(null);
	const [modalEvents, setModalEvents] = useState(null);

	const handleOnDayClick = (date, events) => {
		setModalEvents(events);
		setModalDate(date);
		setOpenModal(true);
	};

	useEffect(() => {
		if (modalIsOpen) {
			modalRef.current.classList.remove("hidden");
		} else {
			modalRef.current.classList.add("hidden");
		}
	}, [modalIsOpen]);
	return (
		<div className="edit-garden">
			<Grid container justifyContent="center">
				<Grid item>
					<h1>Mon jardin : nom de mon jardin</h1>
				</Grid>
			</Grid>

			<Grid container justifyContent="center">
				<Grid item xs={5}>
					<GardenCalendar gardenData={data} onDayClick={handleOnDayClick} />
				</Grid>

				<Grid item xs={5}>
					<GardenMap gardenData={data} />
				</Grid>
			</Grid>

			<div ref={modalRef} className="modal">
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
			</div>
		</div>
	);
};

export default EditGarden;
