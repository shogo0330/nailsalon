import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopPage from "./components/TopPage";
import Access from "./pages/Access";
import CourseList from "./pages/CourseList";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/access" element={<Access />} />
        <Route path="/courseList" element={<CourseList />} />
      </Routes>
    </Router>
  );
}
