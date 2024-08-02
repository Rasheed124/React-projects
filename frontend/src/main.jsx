import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./Context/ProductContext.jsx";

//setup store
import store from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

const persistedStore = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
<Provider store={store}>
  <React.StrictMode>
      <PersistGate loading={<div>Loading...</div>} persistor={persistedStore}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </PersistGate>
    </React.StrictMode>
</Provider>
);


