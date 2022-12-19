import { Provider, useSelector } from "react-redux";
import "./App.css";
import store, { persistor } from "./app/Store";
import Router from "./router/Router";
import { PersistGate } from "redux-persist/es/integration/react";
import { setDarkMode } from "./features/FetchSlice";

function App() {
  return (
    <div className="bg-grey-100 dark:bg-[#23242a]">
      <Provider store={store}>
        <PersistGate darkMode={darkMode} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
