import "./App.css";
import Alert from "./components/Alert";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
// Show messages code starts here
const [alert, setAlert] = useState();

const showAlert = (message, type) => {
  setAlert({
    show: true,
    message: message,
    type: type,
  });
  setTimeout(() => {
    hideAlert();
  }, 2000);
}

const hideAlert = () => {
  setAlert({
    show: false,
    message: "",
    type: "",
  });
}


// Show messages code ends here

  return (
    <Router>
      <Alert alert={alert} hideAlert={hideAlert} />
      <Navbar title="TextUtils" />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Form showAlert={showAlert} hideAlert={hideAlert} />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
