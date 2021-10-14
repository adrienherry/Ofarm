import React, { useEffect } from 'react';
import './garden-calendar.scss';
import { Grid, useTheme, useMediaQuery } from '@material-ui/core';
import Calendar from 'rc-year-calendar';
import 'rc-year-calendar/locales/rc-year-calendar.fr';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { BsPlusSquare } from 'react-icons/bs';
import {
  addHarvest,
  addSpeciesToGarden,
  resetErrorAddSpecies,
  resetErrorFormHarvest,
  setCommentFormHarvest,
  setDateFormHarvest,
  setErrorAddSpecies,
  setErrorFormHarvest,
  setEvents,
  setNewGarden,
  setQuantityFormHarvest,
  setReadyToAddToFalse,
  setReadyToAddToTrue,
  setSelectedEventType,
  setSelectedSpecies,
  setSelectedSpeciesForm,
  setSelectedSpeciesList,
  setSelectedSpeciesToAdd,
} from '../../../../../store/actions/gardens';
import { generateId } from '../../../../../utils/generateId';
import LegendItem from './LegendItem';
import { convertCalendarDate, convertCalendarDayDate, convertCalendarEventDate } from '../../../../../utils/convertDate';
import { fetchSpeciesList } from '../../../../../store/actions/species';
import { checkSpeciesExist } from '../../../../../utils/checkSpeciesExist';

const GardenCalendar = ({ onDayClick }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { enqueueSnackbar } = useSnackbar();
  const garden = useSelector((state) => state.garden.garden);
  const selectedSpecies = useSelector((state) => state.garden.selectedSpecies);
  const selectedEventType = useSelector((state) => state.garden.selectedEventType);
  const selectedSpeciesList = useSelector((state) => state.garden.selectedSpeciesList);
  const speciesList = useSelector((state) => state.species.speciesList);
  const events = useSelector((state) => state.garden.events);
  const selectedSpeciesToAdd = useSelector((state) => state.garden.selectedSpeciesToAdd);
  const errorAddSpecies = useSelector((state) => state.garden.errorAddSpecies);
  const selectedDateFormHarvest = useSelector((state) => state.garden.selectedDateFormHarvest);
  const selectedQuantityFormHarvest = useSelector((state) => state.garden.selectedQuantityFormHarvest);
  const selectedCommentFormHarvest = useSelector((state) => state.garden.selectedCommentFormHarvest);
  const selectedSpeciesFormHarvest = useSelector((state) => state.garden.selectedSpeciesFormHarvest);
  const errorFormHarvest = useSelector((state) => state.garden.errorFormHarvest);

  const newDate = new Date();
  const calendarDate = convertCalendarDate(newDate);

  const eventTypeList = () => {
    const list = [];
    selectedSpeciesList.forEach((speciesItem) => {
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
          styleArray.push(`box-shadow: ${event.eventColor} 0px ${(index + 1) * -5}px 0px 0px inset`);
        }
        else {
          styleArray.push(`${event.eventColor} 0px ${(index + 1) * -5}px 0px 0px inset`);
        }
      }
    });
    const styleString = styleArray.join(', ');
    daySubElement.parentElement.style = `${styleString};`;
  };

  const updateEvents = () => {
    const gardenEvents = [];
    selectedSpeciesList.forEach((speciesItem) => {
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

  const handleClickSelectSpeciesToAdd = (event) => {
    dispatch(setSelectedSpeciesToAdd(event.target.value));
  };

  const handleClickAddSpecies = () => {
    if (checkSpeciesExist(selectedSpeciesList, selectedSpeciesToAdd)) {
      dispatch(setErrorAddSpecies());
    }
    else {
      dispatch(resetErrorAddSpecies());
      dispatch(addSpeciesToGarden(selectedSpeciesToAdd));
      enqueueSnackbar("Ajout d'une nouvelle espèce au jardin", { variant: 'success' });
    }
  };

  const handleSubmitHarvestForm = (event) => {
    event.preventDefault();
    if (selectedQuantityFormHarvest && selectedDateFormHarvest && selectedSpeciesFormHarvest) {
      dispatch(addHarvest());
      dispatch(resetErrorFormHarvest());
      enqueueSnackbar("Ajout d'une nouvelle récolte au jardin", { variant: 'success' });
    }
    else {
      dispatch(setErrorFormHarvest());
    }
  };

  const handleClickSelectSpeciesForm = (event) => {
    dispatch(setSelectedSpeciesForm(event.target.value));
  };

  const handleChangeDateFormHarvest = (event) => {
    console.log(event.target.value);
    dispatch(setDateFormHarvest(event.target.value));
  };
  const handleChangeQuantityFormHarvest = (event) => {
    dispatch(setQuantityFormHarvest(event.target.value));
  };

  const handleChangeCommentFormHarvest = (event) => {
    dispatch(setCommentFormHarvest(event.target.value));
  };

  useEffect(() => {
    dispatch(setSelectedSpeciesList(garden.species));
  }, []);

  useEffect(() => {
    updateEvents();
  }, [selectedEventType, selectedSpecies]);

  useEffect(() => {
    dispatch(setSelectedSpecies(garden.species[0].name));
    if (!speciesList[0]) {
      dispatch(fetchSpeciesList());
    }
  }, []);

  return (
    <div className="garden-calendar">
      <Grid container justifyContent="center">
        <Grid item container lg={5} md={5} sm={10} xs={10} mb={isMedium ? 5 : 0}>
          <Grid item lg={11} md={11} sm={12} xs={12}>
            <div className="garden-calendar__menu">
              <Grid item container className="garden-calendar__menu__select">
                <Grid item lg={12} md={12} sm={12} xs={12} mb={3}>
                  <p className="garden-calendar__menu__select-title"> Option d'affichage :</p>
                </Grid>
                <Grid item container lg={6} md={6} sm={12} xs={12} direction="column" mb={isMobile ? 3 : 0}>
                  <div className="garden-calendar__select-title">
                    Sélectionnez une espèce:
                  </div>
                  <select
                    onClick={handleClickSelectSpecies}
                    id="species"
                    name="species"
                    placeholder="Espèce"
                    className="garden-calendar__selector"
                  >
                    {selectedSpeciesList && selectedSpeciesList.map((species) => (
                      <option
                        className="garden-calendar__option"
                        value={species.name}
                        key={species.id}
                      >
                        {species.name}
                      </option>
                    ))}
                  </select>
                  <div style={{ overflow: 'auto', height: '18rem', width: '95%' }}>
                    {selectedSpeciesList && selectedSpeciesList.map((species) => (
                      <Grid item mt={2}>
                        <LegendItem color={species.color} name={species.name} isDeletable />
                      </Grid>
                    ))}
                  </div>
                </Grid>
                <Grid item container lg={6} md={6} sm={12} xs={12} direction="column">
                  <div className="garden-calendar__select-title">
                    Sélectionnez un évènement:
                  </div>
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
                      <LegendItem color={event.color} name={event.name} isDeletable={false} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item container className="garden-calendar__menu__add" mt={5} direction="column">
                <Grid item>
                  <p className="garden-calendar__menu__add-title"> Sélectionnez une espèce à ajouter au jardin:</p>
                  <select name="species" id="species" onClick={handleClickSelectSpeciesToAdd} className="garden-calendar__selector-add">
                    {speciesList && speciesList.map((species) => (
                      <option
                        value={species.name}
                        key={species.id}
                        className="garden-calendar__menu__species-list"
                      >
                        {species.name}
                      </option>
                    ))}
                  </select>
                </Grid>
                <Grid item container justifyContent="flex-end">
                  <div className="garden-calendar__menu__add-species" onClick={handleClickAddSpecies}>
                    Ajoutez une espèce
                  </div>
                  {errorAddSpecies && (
                    <div style={{ color: 'red', marginTop: '0.5rem' }}>{errorAddSpecies}</div>
                  )}
                </Grid>
              </Grid>
              <Grid item container className="garden-calendar__menu__harvest" direction="column" mt={5}>
                <p className="garden-calendar__menu__harvest-title">Ajouter une récolte à votre jardin :</p>
                <form
                  action=""
                  className="garden-calendar__menu__harvest-form"
                  onSubmit={handleSubmitHarvestForm}
                >
                  <Grid item container alignItems="center" mb={2} justifyContent="space-between">
                    <p>Espèce récoltée :</p>
                    <select name="species" id="species" onClick={handleClickSelectSpeciesForm} className="garden-calendar__menu__harvest-form-species">
                      {selectedSpeciesList && selectedSpeciesList.map((species) => (
                        <option
                          value={species.name}
                          key={species.id}
                          className="garden-calendar__menu__species-list"
                        >
                          {species.name}
                        </option>
                      ))}
                    </select>
                  </Grid>
                  <Grid item container alignItems="center" mb={2} justifyContent="space-between">
                    <p>Date de récolte :</p>
                    <input
                      type="date"
                      value={selectedDateFormHarvest}
                      onChange={handleChangeDateFormHarvest}
                      className="garden-calendar__menu__harvest-form-date"
                    />
                  </Grid>
                  <Grid item container alignItems="center" mb={2} justifyContent="space-between">
                    <p>Quantité récoltée en kg :</p>
                    <input
                      type="number"
                      value={selectedQuantityFormHarvest}
                      onChange={handleChangeQuantityFormHarvest}
                      step={0.1}
                      min={0}
                      max={1000}
                      className="garden-calendar__menu__harvest-form-quantity"
                    />
                  </Grid>
                  <Grid item container direction="column">
                    <p>Ajouter un commentaire <span className="garden-calendar__menu__harvest-form-comment-span">(optionnel)</span>:</p>
                    <textarea
                      value={selectedCommentFormHarvest}
                      onChange={handleChangeCommentFormHarvest}
                      className="garden-calendar__menu__harvest-form-comment"
                    />
                  </Grid>
                  {errorFormHarvest && (
                    <Grid item>
                      <p style={{ color: 'red' }}>{errorFormHarvest}</p>
                    </Grid>
                  )}
                  <Grid item mt={2} container justifyContent="flex-end">
                    <button
                      type="submit"
                      className="garden-calendar__menu__harvest-form-submit"
                    >
                      Ajouter une récolte
                    </button>
                  </Grid>
                </form>
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
