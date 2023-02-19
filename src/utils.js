import moment from "moment";

const formatHourToNumber = (inputHour) => {
  const [hour, minutes] = inputHour.split(":");
  return Number(hour) + Number(minutes) / 60;
};

const formatNumberToHour = (inputNumber) => {
  const [hour, minutes] = `${inputNumber}`.split(".");
  return `${hour}:${minutes ? "30" : "00"}`;
};

const formatCmToMeters = (cm) => {
  const formattedValue = cm.slice(0, 1) + '.' + cm.slice(1,4) + 'm';
    return formattedValue
}

const formatMetersStringToCm = (meters) => {
  const strCopy = meters.split(/[.m]/);
  const formattedValue = Number(strCopy[0] + strCopy[1]);
  return formattedValue;
}

const strContains = (str1, str2) => {
  let callback = false;
  if(str1.toLowerCase().includes(str2.toLowerCase())) {
    callback = true;
  };
  return callback;
};

export const isLessThan24H = (eventDate) => {
  const currentDate = moment();
  const bookingDate = moment(eventDate);
  const bookingDifference = bookingDate.diff(currentDate, 'hours')
  if (bookingDifference < 24) {
    return true;
  } else {
    return false;
  }
}

export { formatHourToNumber, formatNumberToHour, strContains, formatCmToMeters, formatMetersStringToCm };
