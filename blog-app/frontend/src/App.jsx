import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage";
import BlogsPage from "./components/BlogsPage";
import CategoriesPage from "./components/CategoriesPage";
import Navbar from "./components/Navbar";
import NotFoundPage from "./components/PageNotFound";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route for undefined paths */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

{/* <BlogsPage />
<CategoriesPage /> */}