import {createStore,combineReducers} from 'redux';
import normalReducer from '../redux/reducers/reducer';


export default () => {
	//store creation
    
	const store = createStore(
    combineReducers({
        expenses:normalReducer,
    }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

	return store;
}

