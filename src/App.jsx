import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import CoursesPage from "./components/CoursesPage";
import TeamPage from "./components/TeamPage";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Footer from "./components/Footer";
import SignupForm from "./_auth/forms/SignupForm";
import SigninForm from "./_auth/forms/SigninForm"

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<SigninForm />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
