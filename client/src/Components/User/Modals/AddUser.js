import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import CancelIcon from '@mui/icons-material/Cancel'

import api from '../../../Services/api'
import '../User.css'

const AddUser = ({ setModal }) => {
  const [newUser, setNewUser] = useState({})
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
      alert("Passwords do not match")
      e.preventDefault()
    } else {
      api
        .post(`company/${companyId}/users`, {
          credentials: {
            username: username,
            password: password
          },
          profile: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
          },
          admin: admin,
        })
        .then((resp) => console.log(resp))
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
    setPhone(e.target.value)
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
    <div className="user-modal-container">
      <form onSubmit={handleSubmit}>
        <CancelIcon
          onClick={() => setModal(false)}
          className="modal-cancel-btn"
        />
        <div className="addInput">
          <input
            type="text"
            name="firstname"
            placeholder="first name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="last name"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <input
          type="text"
          name="email"
          placeholder="email"
          className="email"
          value={email}
          onChange={handleEmailChange}
        />
        <div className="addInput">
          <input
            type="text"
            name="phone"
            placeholder="phone"
            className="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
          <input
            type="text"
            name="username"
            placeholder="username"
            className="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <input
            type="text"
            name="confirmpassword"
            placeholder="confirm password"
            value={passwordConf}
            onChange={handlePasswordConfChange}
          />
        </div>
        <p>Make user an admin role?</p>
        <Select className="user-admin-select" defaultValue={false}>
          <MenuItem key={false} value={false} onChange={handleAdminChange}>
            False
          </MenuItem>
          <MenuItem key={true} value={true} onChange={handleAdminChange}>
            True
          </MenuItem>
        </Select>
        <button
          className="form-submit-btn"
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
