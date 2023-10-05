import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Details from './pages/details/Details';
import TvShows from './pages/tvshows/TvShows';
import MyList from './pages/mylist/MyList';
import About from './pages/about/About';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Explore />} />
        <Route path="/tvshows/:q" element={<TvShows />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/mylist" element={<MyList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movies/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer data={data} /> */}
    </BrowserRouter>
  );
}

export default App;
