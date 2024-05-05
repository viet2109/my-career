import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "~/App";
import GlobalStyles from "./components/GlobalStyles";
import { persistor, store } from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </PersistGate>
  </Provider>
);
