import moment from 'moment/moment';
import { DATE_FORMATS } from '../consts';

const timeStampToDate = (timestamp, format = 'DD MMMM YYYY') => moment(timestamp).format(format);
const simpleDate = (date) => {
  if (date) {
    return moment(date).format(DATE_FORMATS.simpleDate);
  }

  return '';
};

const monthDate = (date) => {
  if (date) {
    return moment(date).format(DATE_FORMATS.monthDate);
  }

  return '';
};

const dateInLastWeek = (date) => {
  const today = moment(date).format('YYYY-MM-DD HH:mm');
  const dateTo = moment().format('YYYY-MM-DD HH:mm');
  const dateFrom = moment().subtract(7, 'd').format('YYYY-MM-DD HH:mm');

  return moment(today).isBetween(dateFrom, dateTo);
};

export {
  timeStampToDate,
  simpleDate,
  monthDate,
  dateInLastWeek,
};
