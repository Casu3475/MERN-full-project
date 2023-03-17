import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import authReducer from "./state";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// "persist" refers to the ability to store the application state in a persistent storage mechanism such as local storage, session storage, or a database, so that the state can be retrieved and restored even if the user closes and reopens the application or refreshes the page.
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = { key: "root", storage, version: 1 }; // version is used to clear the storage when the version changes
const persistedReducer = persistReducer(persistConfig, authReducer); // persistReducer takes in the config and the reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }, // we ignore these actions because they are not serializable
    }), // we add the middleware to the store
}); // we create the store

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        {/* PersistGate wraps the root component of the application and ensures that the persisted state is loaded before rendering the app */}
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
