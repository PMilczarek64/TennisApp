import moment from "moment";

const formatHourToNumber = (inputHour) => {
  const [hour, minutes] = inputHour.split(":");
  return Number(hour) + Number(minutes) / 60;
};

const formatNumberToHour = (inputNumber) => {
  const [hour, minutes] = `${inputNumber}`.split(".");
  return `${hour}:${minutes ? "30" : "00"}`;
};

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

export { formatHourToNumber, formatNumberToHour, strContains };
