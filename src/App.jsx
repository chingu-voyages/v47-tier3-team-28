import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { getUser } from "./api/user";
import { useDispatch } from "react-redux";
import { setUser } from "./state/user";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import CoursesPage from "./components/CoursesPage";
import TeamPage from "./components/TeamPage";
import Footer from "./components/Footer";
import SignupForm from "./_auth/forms/SignupForm";
import SigninForm from "./_auth/forms/SigninForm";
import Hp from "./components/hp";
import UserProfilePage from "./components/UserProfilePage";
import LessonPage from "./components/lessonPage";

import MyProfile from "./components/MyProfile";
import EditProfile from "./components/EditProfile";
import ChangePassword from "./components/ChangePassword";

function App() {
  const dispatch = useDispatch();

  const id = localStorage.getItem("userId");

  useEffect(() => {
    if (id) {
      getUser(id)
        .then((data) => {
          dispatch(setUser(data));
        })
        .catch((err) => console.log(err));
    }
  }, []);

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
          <Route path="/logs" element={<Hp />} />
          <Route path="/user/:id" element={<UserProfilePage />} />
          <Route path="/lesson" element={<LessonPage />} />

          <Route path="/user/profile" element={<MyProfile />} />
          <Route path="/user/edit-profile" element={<EditProfile />} />
          <Route path="/user/change-password" element={<ChangePassword />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
