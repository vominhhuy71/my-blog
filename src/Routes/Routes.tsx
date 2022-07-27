import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../Views/About';
import Blog from '../Views/Blog';
import HomePage from '../Views/Home';
import Playground from '../Views/Playground';

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/playground" element={<Playground />} />
    </Routes>
  );
};

export default PageRoutes;
