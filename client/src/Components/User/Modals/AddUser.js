import React, { useState } from 'react'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import CancelIcon from '@mui/icons-material/Cancel'
import '../User.css'

const AddUser = ({ setModal }) => {
  const [newUser, setNewUser] = useState({})

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event
  //   setNewUser(
  //     // On autofill we get a stringified value.
  //     typeof value === 'string' ? value.split(',') : value
  //   )
  // }

  return (
    <div className="user-modal-container">
      <form>
        <CancelIcon
          onClick={() => setModal(false)}
          className="modal-cancel-btn"
        />
        <input type="text" name="firstname" placeholder="first name" />
        <input type="text" name="lastname" placeholder="last name" />
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <input
          type="text"
          name="confirmpassword"
          placeholder="confirm password"
        />
        <p>Make user an admin role?</p>
        <Select className="user-admin-select">
          <MenuItem key={false} value={false}>
            False
          </MenuItem>
          <MenuItem key={true} value={true}>
            True
          </MenuItem>
        </Select>
        <button className="form-submit-btn">Submit</button>
      </form>
    </div>
  )
}
export default AddUser
