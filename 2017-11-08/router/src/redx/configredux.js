import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


export default function configureStore() {
    return createStore(counter ,applyMiddleware(thunk));
}

function counter(state = 0 , action) {
    return{
        a : 1 ,
        b : 6
    }
}