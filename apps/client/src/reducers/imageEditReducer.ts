import { Reducer } from "react";

export const imageEditReducer = (state: any, action: any) => {
  switch (action.type) {
    case "update_name": {
      const stateClone = [...state];
      const imageClone = stateClone[action.payload.index];

      imageClone.name = action.payload.value;

      stateClone.splice(action.payload.index, imageClone);

      return stateClone;
    }
    default:
      console.log("Action type not present in switch");
      break;
  }
};
