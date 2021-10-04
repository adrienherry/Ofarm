import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import Modal from '@mui/material/Modal';
import { findGarden } from '../../../../selectors/garden';
import {
  closeModal, fetchGardens, openModal, setModalDate, setModalEvents, setUserGarden,
} from '../../../../store/actions/gardens';
import GardenCalendar from './GardenCalendar';
import './individual-garden.scss';
import { convertModalDate } from '../../../../utils/convertDate';
import ModalItem from './ModalItem';

const IndividualGarden = () => {
  const dispatch = useDispatch();
  const gardens = useSelector((state) => state.user.gardens);
  const { slug } = useParams();
  const userGarden = useSelector((state) => state.garden.garden);
  const isModalOpen = useSelector((state) => state.garden.isModalOpen);
  const modalDate = useSelector((state) => state.garden.modalDate);
  const modalEvents = useSelector((state) => state.garden.modalEvents);

  const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

  const Backdrop = styled('div')`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
  `;

  const style = {
    width: 600,
    height: 400,
    bgcolor: '#ffffff',
    p: 2,
    px: 4,
    pb: 3,
    overflow: 'auto',
    borderRadius: '0.5rem',
  };

  if (gardens[0]) {
    const garden = findGarden(gardens, slug);
    dispatch(setUserGarden(garden));
  }

  const handleOnDayClick = (date, events) => {
    console.log('date', date);
    console.log(events);
    dispatch(setModalDate(date));
    dispatch(setModalEvents(events));
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    if (!gardens[0]) {
      dispatch(fetchGardens());
    }
  }, []);
  return (
    <>
      {userGarden && (
        <div className="individual-garden">
          <GardenCalendar onDayClick={handleOnDayClick} />
        </div>
      )}
      {modalEvents && modalDate && (
      <div>
        <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={isModalOpen}
          onClose={handleCloseModal}
          BackdropComponent={Backdrop}
        >
          <Box sx={style}>
            <h2 id="unstyled-modal-title" className="modal__title">Période sélectionnée: {convertModalDate(modalDate)}</h2>
            <div className="modal-item__container">
              {modalEvents.map((event) => (
                <ModalItem {...event} key={event.id} />
              ))}
            </div>
          </Box>
        </StyledModal>
      </div>
      )}
    </>
  );
};

export default IndividualGarden;
