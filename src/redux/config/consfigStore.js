import { createStore, combineReducers } from "redux";
import fanLetter from "redux/modules/fanletter";
import chosenMember from "redux/modules/chosen-member";

const rootReducer = combineReducers({
  fanLetter,
  chosenMember,
});
const store = createStore(rootReducer);

export default store;
