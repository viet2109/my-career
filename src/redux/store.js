import {
  combineReducers,
  legacy_createStore as createStore,
} from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage,
};

const authPersistConfig = {
  key: "auth",
  storage: storage,
  blacklist: ["isFetching", "error", "success"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

const store = createStore(rootReducer);
const persistor = persistStore(store);

export { store, persistor };
