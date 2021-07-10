import { combineReducers }                    from 'redux'
import { categoriesReducer }                  from '../categories'
import { tCategories, tCats, tGlobal, Types } from "@vj-store/types";
import { catsReducer }                        from "@vj-store/cats/cats.reducer";


const initialState = {
  activeCategory: 0,
  statusBar:true,
}

const globalReducer = (state = initialState, action: { payload: number, type: any }) => {
  switch (action.type) {
    case    Types.activeCategory: {
      return {
        ...state,
        activeCategory: action.payload

      }
    }
    case    Types.statusBar: {
      return {
        ...state,
        statusBar: !state.statusBar

      }
    }
    default:
      return state
  }
}
export type RootState = {
  categories: tCategories
  cats: tCats
  global: tGlobal
}

export const appReducer = combineReducers({
  global    : globalReducer,
  categories: categoriesReducer,
  cats      : catsReducer,

})
