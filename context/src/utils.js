import { days, months } from './appConstants';

export const convertDate = (created) => {
  let newDate = new Date(created);

  let day = newDate.getDay();
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();

  return `${days[day]}, ${date} ${months[month]} ${year}`;
};
