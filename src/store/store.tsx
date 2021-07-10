import { Provider }    from 'react-redux'
import { createStore } from 'redux'
import { appReducer }  from './app'
import { FC }          from "react"



const configureStore = () => createStore(appReducer);

export const Store:FC =({children})=>
  <Provider store={configureStore()}>{children} </Provider>


