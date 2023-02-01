import React, { useState } from "react";
import { Navigate, Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userState } from '../../globalstate'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
const CompanyScreen = ({ setCompanyId }) => {
    const [user, setUser] = useRecoilState(userState)
    
    const companies = user.companies.map((company) => (
      {
      name: company.name, 
      id: company.id
      }
    ))

    const [value, setValue] = useState();

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    if (!user.isLoggedIn) {
        return <Navigate replace to="/" />
    } else if (!user.isAdmin) {
        return <Navigate replace to="/announcements" />
    }
    else {
        return (
          <div className="main-container">
            <h1 className="page-headers">Select Company</h1>
            <form>
              <Select
                className="user-admin-select"
                value= {value}
                onChange={handleChange}
              >
                {companies.map((company) => (
                  <MenuItem key={company.id} value={company.id}>
                    {company.name}
                  </MenuItem>
                ))}
              </Select>
            </form>

            <Link
              className="form-submit-btn"
              to="/announcements"
              onClick={() => setCompanyId(value)}
            >
              Submit
            </Link>
            <button onClick={() => console.log(companies)}>debug</button>
          </div>
        )
    }
}

export default CompanyScreen