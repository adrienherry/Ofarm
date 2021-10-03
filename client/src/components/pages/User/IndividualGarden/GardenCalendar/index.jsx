import React, { useEffect } from 'react';
import './garden-calendar.scss';

import Calendar from 'rc-year-calendar';
import 'rc-year-calendar/locales/rc-year-calendar.fr';
import { useDispatch, useSelector } from 'react-redux';
import { setEvents, setSelectedEventType, setSelectedSpecies } from '../../../../../store/actions/gardens';
import { generateId } from '../../../../../utils/generateId';

const GardenCalendar = () => {
  const dispatch = useDispatch();

  const garden = useSelector((state) => state.garden.garden);
  const selectedSpecies = useSelector((state) => state.garden.selectedSpecies);
  const selectedEventType = useSelector((state) => state.garden.selectedEventType);
  const events = useSelector((state) => state.garden.events);

  const eventTypeList = () => {
    const list = [{ name: 'tous', id: 0 }];
    garden.species.forEach((speciesItem) => {
      speciesItem.events.forEach((speciesEvent) => {
        if (!list.find((eventTypeItem) => eventTypeItem.name === speciesEvent.eventType.name)) {
          list.push({ name: speciesEvent.eventType.name, id: generateId(list) });
        }
      });
    });
    return list;
  };

  const homeMadeDataRenderer = (daySubElement, date, eventsOnDay) => {
    daySubElement.parentElement.style = 'box-shadow: rgb(44, 143, 201) 0px -2px 0px 0px inset, rgb(245, 187, 0) 0px -4px 0px 0px inset, rgb(223, 4, 4) 0px -6px 0px 0px inset, rgba(30, 223, 4, 0.707) 0px -8px 0px 0px inset';
  };

  const updateEvents = () => {
    const gardenEvents = [];
    garden.species.forEach((speciesItem) => {
      if (speciesItem.name === selectedSpecies || selectedSpecies === 'Tous') {
        speciesItem.events.forEach((event) => {
          if (event.eventType.name === selectedEventType || selectedEventType === 'Tous') {
            gardenEvents.push({
              id: event.id,
              species: speciesItem.name,
              speciesId: speciesItem.id,
              name: event.eventType.name,
              startDate: new Date(event.fromDate),
              endDate: new Date(event.untilDate),
            });
          }
        });
      }
    });

    dispatch(setEvents(gardenEvents));
  };

  const handleClickSelectSpecies = (event) => {
    dispatch(setSelectedSpecies(event.target.value));
  };

  const handleClickSelectEventType = (event) => {
    dispatch(setSelectedEventType(event.target.value));
  };

  useEffect(() => {
    updateEvents();
  }, [selectedEventType, selectedSpecies]);

  return (
    <div className="garden-calendar">
      <div className="garden-calendar__selector">
        <select
          onClick={handleClickSelectSpecies}
          id="species"
          name="species"
          placeholder="Espèce"
        >
          <option value="Tous">Tous</option>
          {garden.species.map((species) => (
            <option value={species.name} key={species.id}>{species.name}</option>
          ))}
        </select>

        <select
          onClick={handleClickSelectEventType}
          id="eventType"
          name="eventType"
          placeholder="Type d'évènement"
        >
          {eventTypeList().map((eventTypeItem) => (
            <option value={eventTypeItem.name} key={eventTypeItem.id}>{eventTypeItem.name}</option>
          ))}
        </select>
      </div>
      <div className="calendar-container">
        <Calendar
          language="fr"
          style="border"
          dataSource={events}
          enableContextMenu
          enableRangeSelection
        //   onDayClick={({ date, events }) => onDayClick(date, events)}
          customDataSourceRenderer={homeMadeDataRenderer}
          defaultYear={2000}
        />

      </div>
    </div>
  );
};

export default GardenCalendar;
