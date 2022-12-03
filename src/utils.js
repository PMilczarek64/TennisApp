const formatHourToNumber = (inputHour) => {
  const [hour, minutes] = inputHour.split(":");
  return Number(hour) + Number(minutes) / 60;
};

const formatNumberToHour = (inputNumber) => {
  const [hour, minutes] = `${inputNumber}`.split(".");
  return `${hour}:${minutes ? "30" : "00"}`;
};

export { formatHourToNumber, formatNumberToHour };
