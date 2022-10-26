import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getObjectsByCity } from "../Redux/store";

const Courts = () => {
  const { city } = useParams();
  const objects = useSelector(state => getObjectsByCity(state, city));
  console.log('objects test: ', objects);
  return (
    <div>
      <h4>courts in {city}</h4>
    <ul>
      {objects.map(object => 
        <li key={object.id}>
          <b>Object name: </b>{object.name} <b>Address: </b>{object.address}
        </li>  
      )}
    </ul>
    </div>
  );
};

export default Courts;