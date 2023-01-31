import React, { useState } from "react";
import { Navigate, Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userState } from '../../globalstate'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
const CompanyScreen = () => {
    const [user, setUser] = useRecoilState(userState)
    const companies = user.companies.map((company) => company.name)

    const getInitialState = () => {
        const value = undefined;
        return value;
    };

    const [value, setValue] = useState(getInitialState);

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
                value= {undefined}
                onChange={handleChange}
              >
                {companies.map((company) => (
                  <MenuItem key={company} value={company}>
                    {company}
                  </MenuItem>
                ))}
              </Select>
            </form>
            
              <Link
                className="form-submit-btn"
                to="/announcements"
                state={{data: value }}
              >
                Submit
              </Link>
          </div>
        )
    }
}

export default CompanyScreen