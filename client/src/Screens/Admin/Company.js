import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userState } from '../../globalstate'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import './Company.css'

const CompanyScreen = ({ setCompanyId }) => {
  const [user, setUser] = useRecoilState(userState)
  const [value, setValue] = useState()

  const companies = user.companies.map((company) => ({
    name: company.name,
    id: company.id,
  }))

  function handleSave() {
    setCompanyId(value)
    localStorage.setItem('companyId', value)
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  if (!user.isLoggedIn) {
    return <Navigate replace to='/' />
  } else if (!user.isAdmin) {
    return <Navigate replace to='/announcements' />
  } else {
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div className='main-container'>
          <h1 className='page-headers'>Select Company</h1>
          <form className='company-container'>
            <Select
              className='modal-select'
              value={value}
              onChange={handleChange}
              defaultValue=''
            >
              {companies.map((company) => (
                <MenuItem key={company.id} value={company.id}>
                  {company.name}
                </MenuItem>
              ))}
            </Select>
            <Link className='link-item' to='/announcements'>
              <button
                className='form-submit-btn'
                onClick={handleSave}
                disabled={!value}
              >
                Submit
              </button>
            </Link>
          </form>
        </div>
      </div>
    )
  }
}

export default CompanyScreen
