import React from "react";
import propTypes from "prop-types";
import shortid from "shortid";
import { Select } from "../../../common/Inputs.styles";
import { Form, FormItem } from "./LocationForm.styled";

const LocationForm = ({
  objects,
  setObjectId,
  cities,
  selectedCity,
  handleSubmit,
  handleCityChange,
}) => {
  return (
    <Form>
      <h4>Location:</h4>
      <FormItem>
        <label htmlFor="city">City: </label>
        <Select
          id="city"
          name="city"
          onChange={(e) => handleCityChange(e.target.value)}
        >
          <option value="" key={shortid()}>
            all cities
          </option>
          {cities.map((city) => (
            <option value={city} key={city}>
              {city}
            </option>
          ))}
        </Select>
      </FormItem>
      <FormItem>
        <label htmlFor="object">Object: </label>
        <Select
          type="select"
          name="object"
          disabled={selectedCity.length > 2 ? false : true}
          onChange={(e) => setObjectId(e.target.value)}
        >
          <option value="" key={shortid()}>
            all
          </option>
          {objects.map((object) => (
            <option value={object.id} key={object.id}>
              {object.name} {object.address}
            </option>
          ))}
        </Select>
      </FormItem>
      <button onClick={handleSubmit}>
        <i className="fa fa-search"> Search</i>
      </button>
    </Form>
  );
};

LocationForm.propTypes = {
  objects: propTypes.array.isRequired,
  cities: propTypes.array.isRequired,
  setObjectId: propTypes.func.isRequired,
  selectedCity: propTypes.string.isRequired,
  handleSubmit: propTypes.func.isRequired,
  handleCityChange: propTypes.func.isRequired,
};

export default LocationForm;
