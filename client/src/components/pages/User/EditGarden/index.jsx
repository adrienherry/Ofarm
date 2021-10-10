import React, { useState, useEffect, useRef } from "react";
import { Grid, useMediaQuery, useTheme } from "@material-ui/core";

import "./edit-garden.scss";
import GardenMap from "./GardenMap";
import GardenCalendar from "./GardenCalendar";

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
				{/* <Grid item xs={5}>
					<GardenCalendar gardenData={data} onDayClick={handleOnDayClick} />
				</Grid> */}

				{/* <Grid item> */}
					<GardenMap className="garden-map" />
				{/* </Grid> */}
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
