import { Provider } from "react-redux";
import "./App.css";
import Store from "./app/Store";
import Router from "./router/Router";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
