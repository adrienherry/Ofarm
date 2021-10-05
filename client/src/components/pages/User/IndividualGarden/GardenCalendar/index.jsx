import React, { useEffect } from 'react';
import './garden-calendar.scss';
import { Grid, useTheme, useMediaQuery } from '@material-ui/core';
import Calendar from 'rc-year-calendar';
import 'rc-year-calendar/locales/rc-year-calendar.fr';
import { useDispatch, useSelector } from 'react-redux';
import { setEvents, setSelectedEventType, setSelectedSpecies } from '../../../../../store/actions/gardens';
import { generateId } from '../../../../../utils/generateId';
import LegendItem from './LegendItem';
import { convertCalendarDate, convertCalendarDayDate, convertCalendarEventDate } from '../../../../../utils/convertDate';

const GardenCalendar = ({ onDayClick }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const garden = useSelector((state) => state.garden.garden);
  const selectedSpecies = useSelector((state) => state.garden.selectedSpecies);
  const selectedEventType = useSelector((state) => state.garden.selectedEventType);
  const events = useSelector((state) => state.garden.events);
  const newDate = new Date();
  const calendarDate = convertCalendarDate(newDate);

  const eventTypeList = () => {
    const list = [];
    garden.species.forEach((speciesItem) => {
      speciesItem.events.forEach((speciesEvent) => {
        if (!list.find((eventTypeItem) => eventTypeItem.name === speciesEvent.eventType.name)) {
          list.push({
            name: speciesEvent.eventType.name,
            id: generateId(list),
            color: speciesEvent.eventType.color,
          });
        }
      });
    });
    return list;
  };

  console.log(garden);

  const homeMadeDataRenderer = (daySubElement, date, eventsOnDay) => {
    const eventDate = convertCalendarDayDate(date);
    const styleArray = [];
    eventsOnDay.forEach((event, index) => {
      const startDateEvent = convertCalendarDayDate(event.startDate);
      const endDateEvent = convertCalendarDayDate(event.endDate);
      if (eventDate >= startDateEvent && eventDate <= endDateEvent) {
        if (!styleArray[0]) {
          styleArray.push(`box-shadow: ${event.eventColor} 0px ${(index + 1) * -2}px 0px 0px inset`);
        }
        else {
          styleArray.push(`${event.eventColor} 0px ${(index + 1) * -2}px 0px 0px inset`);
        }
      }
    });
    const styleString = styleArray.join(', ');
    daySubElement.parentElement.style = `${styleString};`;
  };

  const updateEvents = () => {
    const gardenEvents = [];
    garden.species.forEach((speciesItem) => {
      if (speciesItem.name === selectedSpecies) {
        speciesItem.events.forEach((event) => {
          if (event.eventType.name === selectedEventType || selectedEventType === 'Tous') {
            gardenEvents.push({
              id: event.id,
              species: speciesItem.name,
              speciesId: speciesItem.id,
              name: event.eventType.name,
              startDate: new Date(convertCalendarEventDate(event.fromDate)),
              endDate: new Date(convertCalendarEventDate(event.untilDate)),
              imageSpeciesUrl: speciesItem.imageUrl,
              eventColor: event.eventType.color,
              speciesColor: speciesItem.color,
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

  useEffect(() => {
    dispatch(setSelectedSpecies(garden.species[0].name));
  }, []);

  return (
    <div className="garden-calendar">
      <Grid container justifyContent="center">
        <Grid item container lg={5} md={5} sm={10} xs={10} mb={isMedium ? 5 : 0}>
          <Grid item lg={11} md={11} sm={12} xs={12}>
            <div className="garden-calendar__menu">
              <Grid item container>
                <Grid item container lg={6} md={6} sm={6} xs={10} direction="column" mb={isMobile ? 3 : 0}>
                  <select
                    onClick={handleClickSelectSpecies}
                    id="species"
                    name="species"
                    placeholder="Espèce"
                    className="garden-calendar__selector"
                  >
                    {garden.species.map((species) => (
                      <option
                        className="garden-calendar__option"
                        value={species.name}
                        key={species.id}
                      >
                        {species.name}
                      </option>
                    ))}
                  </select>
                  {garden.species.map((species) => (
                    <Grid item mt={2}>
                      <LegendItem color={species.color} name={species.name} />
                    </Grid>
                  ))}
                </Grid>
                <Grid item container lg={6} md={6} sm={6} xs={10} direction="column">
                  <select
                    onClick={handleClickSelectEventType}
                    id="eventType"
                    name="eventType"
                    placeholder="Type d'évènement"
                    className="garden-calendar__selector"
                  >
                    <option value="Tous" className="garden-calendar__option">Tous</option>
                    {eventTypeList().map((eventTypeItem) => (
                      <option
                        value={eventTypeItem.name}
                        key={eventTypeItem.id}
                        className="garden-calendar__option"
                      >
                        {eventTypeItem.name}
                      </option>
                    ))}
                  </select>
                  {eventTypeList().map((event) => (
                    <Grid item mt={2}>
                      <LegendItem color={event.color} name={event.name} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <Grid item lg={6} md={6} sm={10} xs={10}>
          <div className="calendar-container">
            <Calendar
              language="fr"
              style="custom"
              dataSource={events}
              enableContextMenu
              enableRangeSelection
              onDayClick={({ date, events }) => onDayClick(date, events)}
              customDataSourceRenderer={homeMadeDataRenderer}
              defaultYear={calendarDate}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default GardenCalendar;
