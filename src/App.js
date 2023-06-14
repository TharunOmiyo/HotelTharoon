import "./App.css";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingIn from "./Pages/SingIn";
import SingUp from "./Pages/SingUp";
import ForgetPassword from "./Pages/ForgetPassword";
import Offers from "./Pages/Offers";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SingIn />} />
          <Route path="/sign-up" element={<SingUp />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
