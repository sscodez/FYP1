import React from 'react';
import { Route, Routes } from 'react-router-dom';

import About from './Pages/About';
import Contact from './Pages/Contact';
import Donee from './Pages/Donee';
import Dashboard from './Pages/Dashboard';
import  Home from './Pages/Home';
import  Donor  from './Pages/Donor';
import  Project  from './Pages/Project';
import  Signin from './Pages/Signin';
import ProjectDescriptionPage from './components/ProjectDesc';
import ProjectDescriptionPage1 from './components/ProjectDesc1';
import AddOrganizationForm from './components/AddOrganization';
import Transaction from './components/Transaction';
import List from './components/Orgnziationlist';

const App = () => (
 
<div>


 <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Donee" element={<Donee />} />
          <Route path="/Donor" element={<Donor />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Admin" element={<Dashboard />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/ProjectDescriptionPage" element={<ProjectDescriptionPage />} />
          <Route path="/ProjectDescriptionPage1" element={<ProjectDescriptionPage1 />} />
          <Route path="/AddOrganizationForm" element={<AddOrganizationForm />} />
          <Route path="/Transaction" element={<Transaction />} />
          <Route path="/OList" element={<List/>} />
          
          
          
        </Routes>
</div>
   
);

export default App;
