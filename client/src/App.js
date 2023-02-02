import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { userState } from './globalstate'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Announcements from './Screens/Shared/Announcements';
import Login from './Screens/Shared/Login';
import CompanyScreen from './Screens/Admin/Company';
import Projects from './Screens/Admin/Projects';
import Users from './Screens/Admin/Users';
import Teams from './Screens/Admin/Teams';
import Project from './Screens/Worker/Project';

function App() {
  const [companyId, setCompanyId] = useState()
  const [user, setUser] = useRecoilState(userState)

  const companyProps = { companyId, setCompanyId };

  function handleUser() {
    if (!user.isAdmin) {
      const companyId = user.companies.map((company) => company.id)
      return companyId
    } else {
      const companyId = JSON.parse(localStorage.getItem('companyId'))
      return companyId
    }
  }

  return (
    <div style={{height: "100%"}}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/announcements"
          element={<Announcements {...companyProps} handleUser={handleUser} />}
        />
        <Route path="/company" element={<CompanyScreen {...companyProps} />} />
        <Route path="/projects" element={<Projects handleUser={handleUser} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/teams" element={<Teams {...companyProps} />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  )
}

export default App;
