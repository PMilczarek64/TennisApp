import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addBooking,getObjectById } from "../../../Redux/objectsRedux";
import { getLoggingInInfo } from "../../../Redux/usersRedux";
import ActionModal from "../../../common/ActionModal/ActionModal";
import { FormItem, ButtonsWrapper } from "./BookingForm.styled";
import { ButtonGreenOutline, ButtonRedOutline } from "../../../common/Button";
import { Label, Select } from "../../../common/Inputs.styles";
import {
  formatHourToNumber,
  formatNumberToHour,
  concatDayAndHour,
} from "../../../utils";

const BookingForm = ({
  showModal,
  setShowBookingForm,
  freeHours,
  busyHours,
  fromHour,
  setSelectedHour,
  selectedEndHour,
  setSelectedEndHour,
  selectedCourt,
  tableDate,
  bookingId,
}) => {
  const dispatch = useDispatch();
  const { objectId } = useParams();

  const freeHoursByCourt = freeHours.filter(
    (object) => object.courtId === selectedCourt
  );
  const busyHoursByCourt = busyHours.filter(
    (object) => object.courtId === selectedCourt
  );
  const maxBusyHours = busyHoursByCourt.map(({ hour }) =>
    formatHourToNumber(hour)
  );

  const loggedUser = useSelector(getLoggingInInfo);
  const [maxPossibleHours, setMaxPossibleHours] = useState([]);

  const object = useSelector((state) => getObjectById(state, Number(objectId)));
  const closingHour = object.contentData[0].closingHour;

  const countPossibleHours = () => {
    const nextBusyHour =
      maxBusyHours.filter((hour) => hour > fromHour)[0] || closingHour + 0.5;
    let preparedMaxPossibleHours = freeHoursByCourt
      .map(({ hour }) => formatHourToNumber(hour))
      .filter((hour) => hour < nextBusyHour && hour > fromHour);
    if (nextBusyHour) {
      preparedMaxPossibleHours = [
        ...preparedMaxPossibleHours,
        nextBusyHour,
      ].sort();
    }
    setMaxPossibleHours(preparedMaxPossibleHours);
  };
  /* eslint-disable */
  useEffect(() => {
    countPossibleHours();
    setSelectedEndHour(fromHour + 0.5);
  }, [fromHour, tableDate]);
  /* eslint-enable */
  const handleChange = (e) => {
    setSelectedHour(formatHourToNumber(e));
  };

  const handleCLose = () => {
    setShowBookingForm(false);
  };

  const handleBooking = () => {
    const startHourFormmatedToDispatch = concatDayAndHour(tableDate, fromHour);
    const endHourFormattedToDispatch = concatDayAndHour(
      tableDate,
      selectedEndHour - 0.5
    );
    dispatch(
      addBooking({
        id: bookingId,
        startDate: startHourFormmatedToDispatch,
        endDate: endHourFormattedToDispatch,
        court: selectedCourt,
        repeat: false,
        objectId: Number(objectId),
        bookedByUser: loggedUser.id,
      })
    );
    countPossibleHours();
    setSelectedHour(null);
    setShowBookingForm(false);
  };

  return (
    <ActionModal
      headerText={`Book tennis court num. ${selectedCourt}`}
      showModal={showModal}
    >
      <FormItem>
        <Label htmlFor="date">Date: </Label>
        <p>{moment(tableDate).format("YYYY/MM/DD")}</p>
      </FormItem>
      <FormItem>
        <Label htmlFor="from-hour">From hour: </Label>
        <Select
          id="from-hour"
          name="from-hour"
          onChange={(e) => handleChange(e.target.value)}
          value={formatNumberToHour(fromHour)}
        >
          {freeHoursByCourt.map(
            (object) =>
              object.courtId === selectedCourt && (
                <option value={object.hour} key={object.hour}>
                  {object.hour}
                </option>
              )
          )}
        </Select>
      </FormItem>
      <FormItem>
        <Label htmlFor="to-hour">To hour: </Label>
        <Select onChange={(e) => setSelectedEndHour(e.target.value)}>
          {maxPossibleHours.map((hour) =>
              <option value={hour} key={hour}>
                {formatNumberToHour(hour)}
              </option>
          )}
        </Select>
      </FormItem>
      <ButtonsWrapper>
        <ButtonRedOutline onClick={() => handleCLose()}>Close</ButtonRedOutline>
        <ButtonGreenOutline onClick={() => handleBooking()}>
          Confirm
        </ButtonGreenOutline>
      </ButtonsWrapper>
    </ActionModal>
  );
};

BookingForm.propTypes = {
  setShowBookingForm: propTypes.func.isRequired,
  showModal: propTypes.bool.isRequired,
  freeHours: propTypes.array.isRequired,
  busyHours: propTypes.array.isRequired,
  fromHour: propTypes.number,
  setSelectedHour: propTypes.func.isRequired,
  selectedEndHour: propTypes.oneOfType([
    propTypes.string,
    propTypes.number
  ]),
  setSelectedEndHour: propTypes.func.isRequired,
  selectedCourt: propTypes.number.isRequired,
  tableDate: propTypes.instanceOf(Date),
  bookingId: propTypes.string.isRequired,
};

export default BookingForm;
