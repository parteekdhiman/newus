import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Suspense } from "react";
const CoursesContent = lazy(() => import("./pages/CoursesContent"));
const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Chatbot = lazy(() => import("./pages/Chatbot"));
const Footer = lazy(() => import("./components/Footer"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const Courses = lazy(() => import("./pages/Courses"));
const Preloader = lazy(() => import("./pages/Preloader"));
const OneTimePopup = lazy(() => import("./components/OneTimePopup"));

function App() {
  return (
    <>
      <title>
        Newus Dharamshala || Educational institution in Dharamsala, Himachal
        Pradesh
      </title>
      <Suspense fallback={<Preloader />}>
        <Navbar />
        <OneTimePopup />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/get-started" element={<Courses />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
          <Route path="/courses/:id" element={<CoursesContent />}></Route>
        </Routes>
        <Chatbot />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
