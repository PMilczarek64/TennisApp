//selectors
export const getAllObjects = (state) => state.objects;
export const getObjectsByCity = ({ objects }, city) =>
  city !== "" && city !== undefined
    ? objects.filter((object) => object.city === city)
    : objects;
export const getObjectById = ({ objects }, objectId) =>
  objects.find((object) => object.id === objectId);
export const getFirstFacilityByCity = ({ objects }, city) =>
  objects.find((object) => object.city === city);
export const getUserObjectsByUserId = ({ objects }, userId) =>
  objects.filter((object) => object.propertyOfUser === userId);
export const getEventsByObjectId = ({ objects }, objectId) =>
  objects.filter((object) => object.id === objectId)[0].events;
export const getAllEvents = ({ objects }) =>
  objects.filter((object) => object.events && object.events);

// action
export const addBooking = (payload) => ({ type: "ADD_BOOKING", payload });
export const deleteBooking = (payload) => ({ type: "DELETE_BOOKING", payload });

const objectsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOKING":
      const object = state.objects.find(
        (object) => object.id === action.payload.objectId
      );

      const newObjectItem = {
        ...object,
        events: object.events.concat([action.payload]),
      };

      return {
        ...state,
        objects: state.objects.map((item) => {
          if (item.id === action.payload.objectId) {
            return newObjectItem;
          } else {
            return item;
          }
        }),
      };
    case "DELETE_BOOKING":
      const obj = state.objects.find(
        (object) => object.id === action.payload.objectId
      );
      const newObjItem = {
        ...obj,
        events: obj.events.filter(
          (event) => event.id !== action.payload.bookingId.toString()
        ),
      };
      return {
        ...state,
        objects: state.objects.map((item) => {
          if (item.id === action.payload.objectId) {
            return newObjItem;
          } else {
            return item;
          }
        }),
      };

    default:
      return state;
  }
};

export default objectsReducer;
