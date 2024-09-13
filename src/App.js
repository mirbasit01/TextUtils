import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import { type } from "@testing-library/user-event/dist/type";
// import React from "react";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = " TextUtils - Dark Mode ";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = " TextUtils - Light Mode ";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Texttutel"
          aboutText="About Text"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
            {/* <Route path="/about" element={<About />}>
            </Route> */}
             <Route path="/about" element={<About />} />

            {/* <Route path="/">
              {
                <TextForm
                  showAlert={showAlert}
                  heading="Enter ther text to analyze below"
                  mode={mode}
                />
              }
            </Route> */}
            <Route path="/" element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
