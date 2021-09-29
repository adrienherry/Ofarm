import dayjs from 'dayjs';
import fr from 'dayjs/locale/fr';

const convertEventDate = (date) => {
  dayjs.locale(fr);
  const convertedDate = dayjs(date).format('DD MMMM');
  return convertedDate;
};

export default convertEventDate;
