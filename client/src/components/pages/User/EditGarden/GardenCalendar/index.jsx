import React, { useState, useEffect } from "react";
import "./garden-calendar.scss";

import Calendar from "rc-year-calendar";
import "rc-year-calendar/locales/rc-year-calendar.fr";

const GardenCalendar = ({ gardenData, onDayClick }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [selectedEventType, setSelectedEventType] = useState(["Tous"]);
	const [selectedSpecies, setSelectedSpecies] = useState("Tous");
	const [events, setEvents] = useState([]);

	const homeMadeDataRenderer = (daySubElement, date, eventsOnDay) => {
		// daySubElement.parentElement.style = `background-color:${
		// 	defaultColors[Math.floor(6 * Math.random())]
		// // }90`;
		// const style = "";
		// eventsOnday.forEach(event => {
		// 			// box-shadow: rgb(44, 143, 201) 0px -2px 0px 0px inset, rgb(245, 187, 0) 0px -4px 0px 0px inset;
		// 			style += `box-shadow: rgb(44, 143, 201) 0px -2px 0px 0px inset`;
		// 		})
		daySubElement.parentElement.style =
			"box-shadow: rgb(44, 143, 201) 0px -2px 0px 0px inset, rgb(245, 187, 0) 0px -4px 0px 0px inset, rgb(223, 4, 4) 0px -6px 0px 0px inset, rgba(30, 223, 4, 0.707) 0px -8px 0px 0px inset";
	};

	const eventTypeList = () => {
		const list = ["Tous"];

		gardenData &&
			gardenData.species &&
			gardenData.species.map((speciesItem) => {
				speciesItem.events.map((speciesEvent) => {
					if (
						!list.find(
							(eventTypeItem) => eventTypeItem === speciesEvent.eventType.name,
						)
					) {
						list.push(speciesEvent.eventType.name);
					}
				});
			});

		return list;
	};

	const updateEvents = () => {
		const gardenEvents = [];
		gardenData.species.forEach((speciesItem) => {
			if (speciesItem.name === selectedSpecies || selectedSpecies === "Tous") {
				speciesItem.events.forEach((event) => {
					if (
						event.eventType.name === selectedEventType ||
						selectedEventType === "Tous"
					)
						gardenEvents.push({
							id: event.id,
							species: speciesItem.name,
							speciesId: speciesItem.id,
							name: event.eventType.name,
							startDate: new Date(event.fromDate),
							endDate: new Date(event.untilDate),
						});
				});
			}
		});

		setEvents(gardenEvents);
		setIsLoaded(true);
	};

	// const defaultColors = [
	// 	"#2C8FC9",
	// 	"#9CB703",
	// 	"#F5BB00",
	// 	"#FF4A32",
	// 	"#B56CE2",
	// 	"#45A597",
	// ];

	useEffect(() => {
		gardenData && gardenData.species && updateEvents();
	}, [selectedSpecies, selectedEventType]);

	return (
		<div className="container">
			<div>
				<select
					onClick={(e) => {
						setSelectedSpecies(e.target.value);
					}}
					id="species"
					name="species"
					placeholder="Espèce"
				>
					<option value={"Tous"}>Tous</option>
					{gardenData &&
						gardenData.species &&
						gardenData.species.map((species) => (
							<option value={species.name}>{species.name}</option>
						))}
				</select>

				<select
					onClick={(e) => {
						setSelectedEventType(e.target.value);
					}}
					id="eventType"
					name="eventType"
					placeholder="Type d'évènement"
				>
					{gardenData &&
						gardenData.species &&
						eventTypeList().map((eventTypeItem) => {
							return <option value={eventTypeItem}>{eventTypeItem}</option>;
						})}
				</select>
			</div>
			{gardenData && (
				<div className="calendar-container">
					<Calendar
						language="fr"
						style="border"
						dataSource={events}
						enableContextMenu={true}
						enableRangeSelection={true}
						onDayClick={({ date, events }) => onDayClick(date, events)}
						customDataSourceRenderer={homeMadeDataRenderer}
						defaultYear={2000}
						// contextMenuItems={[
						// 	{
						// 		text: "Update",
						// 		click: (evt) => setCurrentText(evt),
						// 	},
						// 	{
						// 		text: "Delete",
						// 		click: (evt) => setCurrentText(evt),
						// 	},
						// ]}
						// minDate={new Date()}
					/>

					{/* <div className="data-container">
				<textarea value={currentText} />
 			</div> */}
				</div>
			)}
		</div>
	);
};

export default GardenCalendar;
