import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeScreen from './screens/home';
import AboutScreen from './screens/about';
import DestinationScreen from './screens/destination';
import HotelScreen from './screens/hotel';
import ContactScreen from './screens/contact';
import PagesNotFoundScreen from './screens/pages-not-found';

import "./css/flaticon.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="about" element={<AboutScreen></AboutScreen>}></Route>
        <Route path="destination" element={<DestinationScreen></DestinationScreen>}></Route>
        <Route path="hotel" element={<HotelScreen></HotelScreen>}></Route>
        <Route path="contact" element={<ContactScreen></ContactScreen>}></Route>


        <Route path="*" element={<PagesNotFoundScreen></PagesNotFoundScreen>}></Route>

      </Routes>
    </BrowserRouter>



  );
};

export default App;