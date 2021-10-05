import dayjs from 'dayjs';
import fr from 'dayjs/locale/fr';

const convertEventDate = (date) => {
  dayjs.locale(fr);
  const convertedDate = dayjs(date).format('DD MMMM');
  return convertedDate;
};

export const convertModalDate = (date) => {
  dayjs.locale(fr);
  const convertedDate = dayjs(date).format('DD MMMM YYYY');
  return convertedDate;
};

export const convertCalendarDate = (date) => {
  dayjs.locale(fr);
  const convertedDate = dayjs(date).format('YYYY');
  return convertedDate;
};

export const convertCalendarEventDate = (date) => {
  dayjs.locale(fr);
  const newDate = new Date();
  const yearDate = convertCalendarDate(newDate);
  const convertedDate = dayjs(date).format('MM-DD');
  return `${yearDate}-${convertedDate}`;
};

export const convertCalendarDayDate = (date) => {
  dayjs.locale(fr);
  const convertedDate = dayjs(date).format('MMDD');
  return convertedDate;
};

export default convertEventDate;
