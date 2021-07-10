import { Types }   from "@vj-store/types";
import { service } from "@vj-store/services";


const actionDispatch = (dispatch: (arg: { type: any; payload: any; }) => void, type: string, payload: any) => {
  if (payload) dispatch({type, payload})
}

export const Actions = {
  toggleStatusBar     : (dispatch: (arg0: { type: string; payload: any; }) => void) =>
    dispatch({
      type   : Types.statusBar,
      payload: ""
    }),
  getCategories       : (dispatch: (arg0: { type: string; payload: any; }) => void) =>
    service.getCategories().then((payload) => actionDispatch(
      dispatch, Types.categories.getAll, payload)
    ),
  setCats             : (page: number, categoryId: number, dispatch: (arg0: { type: string; payload: any; }) => void) =>
    service.getCats({page, categoryId}).then((payload) => {
      actionDispatch(dispatch, Types.cats.set, payload)
    }),
  addCats             : (page: number, categoryId: number, dispatch: (arg0: { type: string; payload: any; }) => void) =>
    service.getCats({page, categoryId}).then((payload) => {
      actionDispatch(dispatch, Types.cats.add, payload)
    }),
  changeActiveCategory: function (id: number, dispatch: (arg0: { type: string; payload: any; }) => void) {
    actionDispatch(dispatch, Types.activeCategory, id)
    this.setCats(1, id, dispatch)
  }

}

