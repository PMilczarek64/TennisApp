import moment from "moment";

const formatHourToNumber = (inputHour) => {
  const isValidInput = /^\d{2}:\d{2}$/.test(inputHour);
  if(!isValidInput) return 'Error';
  
  const [hour, minutes] = inputHour.split(":");
  return Number(hour) + Number(minutes) / 60;
  };


const formatNumberToHour = (inputNumber) => {
  if (typeof inputNumber !== "number") {
    return "Error";
  }
  
  const hour = Math.floor(inputNumber);
  const minutes = inputNumber - hour === 0.5 ? "30" : "00";

  if (hour < 0 || hour > 24) {
    return "Error";
  }
  
  return `${hour.toString().padStart(2, '0')}:${minutes}`;
};

const concatDayAndHour = (date, hour) => {
  const dayToConcat = moment(date).format().slice(0, 11);
  const hourToConcat = formatNumberToHour(hour) + ":00";
  const timeChange = moment(date).format().slice(-6);
  return `${dayToConcat}${hourToConcat}${timeChange}`;
};

const formatCmToMeters = (cm) => {
  const formattedValue = cm.slice(0, 1) + "." + cm.slice(1, 4) + "m";
  return formattedValue;
};

const formatMetersStringToCm = (meters) => {
  const strCopy = meters.split(/[.m]/);
  const formattedValue = Number(strCopy[0] + strCopy[1]);
  return formattedValue;
};

const strContains = (str1, str2) => {
  let callback = false;
  if (str1.toLowerCase().includes(str2.toLowerCase())) {
    callback = true;
  }
  return callback;
};

export const checkIfUserHasProfile = (userId, playerProfile) => {
  if (isNaN(Number(userId)) === false) {
    if (playerProfile !== undefined) {
      return true;
    } else {
      return false;
    }
  }
};

export const isLessThan24H = (eventDate) => {
  const currentDate = moment();
  const bookingDate = moment(eventDate);
  const bookingDifference = bookingDate.diff(currentDate, "hours");
  if (bookingDifference < 24) {
    return true;
  } else {
    return false;
  }
};

export const isValidEmail = (email) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

export {
  formatHourToNumber,
  formatNumberToHour,
  strContains,
  formatCmToMeters,
  formatMetersStringToCm,
  concatDayAndHour,
};
