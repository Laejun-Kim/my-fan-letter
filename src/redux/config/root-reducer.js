import { combineReducers } from "redux";
import fanLetter from "redux/modules/fanletter";
import chosenMember from "redux/modules/chosen-member";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["fanLetter", "chosenMember"],
};

const rootReducer = combineReducers({
  fanLetter,
  chosenMember,
});

export default persistReducer(persistConfig, rootReducer);
