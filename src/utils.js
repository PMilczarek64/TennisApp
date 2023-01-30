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

export { formatHourToNumber, formatNumberToHour, strContains };
