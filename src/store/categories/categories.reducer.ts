import { tCategories, Types } from "@vj-store/types";



const initialState: tCategories = []

export const categoriesReducer = (state = initialState, action: { type: string; payload: []; }) => {
  switch (action.type) {
    case Types.categories.getAll: {
      return action.payload
    }
    default:
      return state;
  }
};
