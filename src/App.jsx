import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';
import { useGetAboutUs } from './services/useGetAboutUs';

function App() {
  const { data } = useGetAboutUs()

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/movies" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer data={data} />
    </BrowserRouter>
  );
}

export default App;
