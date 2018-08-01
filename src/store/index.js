import {createStore} from 'redux'
import {widgetReducer} from '../reducers/widgetReducer'

let store = createStore(widgetReducer);

export default store;