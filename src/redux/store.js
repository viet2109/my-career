import {
  combineReducers,
  legacy_createStore as createStore,
} from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import quizHollandReducer from "./quizHollandSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage: storage,
  blacklist: ["isFetching", "error", "success"],
};

const quizHollandPersistConfig = {
  key: "quiz",
  storage: storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  quiz: persistReducer(quizHollandPersistConfig, quizHollandReducer),
});

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const persistor = persistStore(store);

export { store, persistor };
