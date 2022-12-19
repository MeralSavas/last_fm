import { Provider } from "react-redux";
import "./App.css";
import store from "./app/Store";
import Router from "./router/Router";

function App() {
  return (
    <div className="bg-grey-100 dark:bg-[#23242a]">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
