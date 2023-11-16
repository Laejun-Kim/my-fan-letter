import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import fanLetter from "redux/modules/fanletter";
import chosenMember from "redux/modules/chosen-member";

const rootReducer = combineReducers({
  fanLetter,
  chosenMember,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
