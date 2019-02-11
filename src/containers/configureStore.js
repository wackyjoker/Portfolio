import {createStore,combineReducers} from 'redux';
import expensesReducer from '../redux/reducers/expenses';


export default () => {
	//store creation
    
	const store = createStore(
    combineReducers({
        expenses:expensesReducer,
    }),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

	return store;
}

