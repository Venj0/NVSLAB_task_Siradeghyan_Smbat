import { tCats, Types } from "@vj-store/types";


const initialState: tCats = []

export const catsReducer = (state = initialState, action: { type: string; payload: []; }) => {
  switch (action.type) {
    case Types.cats.set: {
      return action.payload
    }
    case Types.cats.add: {
      return [...state,...action.payload]
    }
    default:
      return state;
  }
};
