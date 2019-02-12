import moment from 'moment';

export function FormatDate(date: string, timer: string) {
  return moment(`${date} ${timer}`, 'MMM DD, YYYY hh:mm A')
    .format()
}