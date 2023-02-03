import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import CancelIcon from '@mui/icons-material/Cancel'

import api from '../../../Services/api'
import '../User.css'

const AddUser = ({ setModal }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConf, setPasswordConf] = useState('')
  const [admin, setAdmin] = useState('')

  const companyId = JSON.parse(localStorage.getItem('companyId'))

  const handleSubmit = (e) => {
    if (password !== passwordConf) {
      alert('Passwords do not match')
      e.preventDefault()
    } else {
      api
        .post(`company/${companyId}/users`, {
          credentials: {
            username: username,
            password: password,
          },
          profile: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
          },
          admin: admin,
        })
    }
  }

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value)
  }
  const handleLastNameChange = (e) => {
    setLastName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePhoneChange = (e) => {
    if (!e.target.value.match(/[^\d]/)) {
      setPhone(e.target.value)
    }
  }
  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handlePasswordConfChange = (e) => {
    setPasswordConf(e.target.value)
  }
  const handleAdminChange = (e) => {
    setAdmin(e.target.value)
  }

  return (
    <div className='user-modal-container'>
      <form onSubmit={handleSubmit}>
        <CancelIcon
          onClick={() => setModal(false)}
          className='modal-cancel-btn'
        />
        <div className='addInput'>
          <input
            type='text'
            name='firstname'
            minlength='1'
            maxlength='30'
            placeholder='first name'
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
          <input
            type='text'
            name='lastname'
            minlength='1'
            maxlength='30'
            placeholder='last name'
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <input
          type='email'
          name='email'
          placeholder='email'
          className='email'
          value={email}
          onChange={handleEmailChange}
          required
        />
        <div className='addInput'>
          <input
            type='tel'
            name='phone'
            placeholder='phone'
            className='phone'
            minlength='11'
            maxlength='11'
            value={phone}
            onChange={handlePhoneChange}
            required
          />
          <input
            type='text'
            name='username'
            placeholder='username'
            className='username'
            minlength='4'
            maxlength='30'
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <input
            type='password'
            name='password'
            minlength='8'
            maxlength='60'
            placeholder='password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <input
            style={{marginTop:"32px"}}
            type='password'
            name='confirmpassword'
            placeholder='confirm password'
            value={passwordConf}
            onChange={handlePasswordConfChange}
            required
          />
        </div>
        <p style={{ marginTop: "32px", color: 'burlywood'}}>Make user an admin role?</p>
        <Select className='modal-select' defaultValue={false}>
          <MenuItem key={false} value={false} onChange={handleAdminChange}>
            Yes
          </MenuItem>
          <MenuItem key={true} value={true} onChange={handleAdminChange}>
            No
          </MenuItem>
        </Select>
        <button
          className='form-submit-btn'
          disabled={
            !firstName ||
            !lastName ||
            !phone ||
            !email ||
            !username ||
            !password ||
            !passwordConf
          }
        >
          Submit
        </button>
      </form>
    </div>
  )
}
export default AddUser
