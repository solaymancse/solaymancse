import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { Tutorials } from './pages/Tutorials';
import { Contact } from './pages/Contact';
import { ServicesPage } from "./pages/ServicesPage";


export const MainComponents = () => {

  return (
    <>
     
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/tutorials" element={<Tutorials/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<ServicesPage/>}/>

      </Routes>
    </>
  );
};
