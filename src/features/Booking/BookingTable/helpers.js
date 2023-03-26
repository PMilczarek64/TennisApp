import moment from "moment";
import { formatNumberToHour } from "../../../utils";

export const checkIfBusy = (events, courtId, tableDate, hour) =>
events.some(
  (event) =>
    (event.court === courtId &&
      moment(event.startDate).format("HH:mm") <= hour &&
      moment(event.endDate).format("HH:mm") >= hour &&
      moment(event.startDate).format("YYYY/MM/DD") ===
        moment(tableDate).format("YYYY/MM/DD")) ||
    (event.court === courtId &&
      moment(event.startDate).format("HH:mm") <= hour &&
      moment(event.endDate).format("HH:mm") >= hour &&
      event.repeat === true)
);

export const checkIfBusyByYou = (events, courtId, tableDate, loggedUser, hour) =>
events.some(
  (event) =>
    event.court === courtId &&
    moment(event.startDate).format("HH:mm") <= hour &&
    moment(event.endDate).format("HH:mm") >= hour &&
    moment(event.startDate).format("YYYY/MM/DD") ===
      moment(tableDate).format("YYYY/MM/DD") &&
    Number(event.bookedByUser) === Number(loggedUser.id) &&
    event.bookedByUser !== undefined
);

export const checkIfTermExpired = (tableDate, hour) => {
  if (
    moment(tableDate).format("L") === moment().format("L") &&
    formatNumberToHour(hour) > moment(tableDate).format("HH:mm")
  ) {
    return true;
  } else if (moment(tableDate).format("L") !== moment().format("L")) {
    return true;
  } else {
    return false;
  }
};