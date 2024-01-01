import React, { Suspense, lazy } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Loader from './loader';
const Navbar = lazy(() => import('./Navbar'));
const MainPage = lazy(() => import('./mainPage'));
const CountryDetail = lazy(() => import('./CountryDetail'));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route exact path='/' Component={MainPage} />
            <Route path='/country/:alpha3Code' Component={CountryDetail} />
          </Routes>
        </Router>
      </Suspense>
    </>
  )
}

export default App