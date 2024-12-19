import { InitialState } from "@/types/storeTypes";

const initialState: InitialState["pageCoordinates"] = { 
  up: { isUped: false, pageX: 0, pageY: 0 } 
};

type PayloadType = { up: InitialState["pageCoordinates"]["up"] };

export default function reducer(store = initialState, {type, payload}: {type: string; payload: PayloadType}): 
InitialState["pageCoordinates"] {
  switch(type) {
    case "UPDATE_STATE":
      return { ...store, ...payload };
    default:
      return store;
  }
}