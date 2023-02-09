import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "redux";
import thunk from "redux-thunk";
import { categoriesReducer } from './reducers/categoriesReducer';
import { postsReducer } from './reducers/postsReducer';



const rootReducer = combineReducers({
    categoriesReducer:categoriesReducer,
    postsReducer:postsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));