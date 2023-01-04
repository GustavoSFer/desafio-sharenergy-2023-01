import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';
import Home from '../Pages/Home';
import HttpCats from '../Pages/HttpCats';
import RandomDog from '../Pages/RandomDog';
import ListCustomer from '../Pages/ListCustomer';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cats" element={<HttpCats />} />
      <Route path="/dogs" element={<RandomDog />} />
      <Route path="/list" element={<ListCustomer />} />
    </Routes>
  );
}

export default Routers;
