import {
  combineReducers,
  legacy_createStore as createStore
} from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import apiGeneralReducer from "./apiGeneralSlice";
import authReducer from "./authSlice";
import quizHollandReducer from "./quizHollandSlice";

const authPersistConfig = {
  key: "auth",
  storage: storage,
};

const apiGeneralPersistConfig = {
  key: "apiGeneral",
  storage: storage
};

const quizHollandPersistConfig = {
  key: "quiz",
  storage: storage,
};

const rootReducer = combineReducers({
  apiGeneral: persistReducer(apiGeneralPersistConfig, apiGeneralReducer),
  auth: persistReducer(authPersistConfig, authReducer),
  quiz: persistReducer(quizHollandPersistConfig, quizHollandReducer),
});

const store = createStore(rootReducer);
const persistor = persistStore(store);

export { persistor, store };

