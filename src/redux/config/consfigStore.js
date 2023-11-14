import { createStore, combineReducers } from "redux";
import fanletter from "redux/modules/fanletter";
import chosenMember from "redux/modules/chosen-member";

const rootReducer = combineReducers({
  fanletter,
  chosenMember,
});
const store = createStore(rootReducer);

export default store;
