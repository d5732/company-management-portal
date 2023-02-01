import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import CancelIcon from '@mui/icons-material/Cancel'
import '../User.css'

const AddUser = ({ setModal }) => {
  const [newUser, setNewUser] = useState({})

  return (
    <div className="user-modal-container">
      <form>
        <CancelIcon
          onClick={() => setModal(false)}
          className="modal-cancel-btn"
        />
        <div className="nameInput">
          <input type="text" name="firstname" placeholder="first name" />
          <input type="text" name="lastname" placeholder="last name" />
        </div>
        <input type="text" name="email" placeholder="email" className="email" />
        <div>
          <input type="text" name="password" placeholder="password" />
          <input
            type="text"
            name="confirmpassword"
            placeholder="confirm password"
          />
        </div>
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
