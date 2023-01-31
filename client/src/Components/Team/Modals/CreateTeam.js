import React, { useState } from 'react'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import CancelIcon from '@mui/icons-material/Cancel'
import '../Team.css'

const CreateTeam = ({ setModal, data }) => {
  const [userName, setUserName] = useState([])

  const names = ['will martalla', 'helena makendengue']

  const handleChange = (event) => {
    const {
      target: { value },
    } = event
    setUserName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
  }

  return (
    <div className='team-modal-container'>
      <form>
        <CancelIcon
          onClick={() => setModal(false)}
          className='modal-cancel-btn'
        />
        <input type='text' name='teamName' placeholder='team name' />
        <input type='text' name='teamDescription' placeholder='description' />
        <h2>Select Members</h2>
        <Select
          className='team-modal-select'
          multiple
          value={userName}
          onChange={handleChange}
          input={<OutlinedInput id='select-multiple-chip' />}
          renderValue={(selected) => (
            <Box className='select-box'>
              {selected.map((value) => (
                <Chip className='select-chip' key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
        <button className='form-submit-btn'>Submit</button>
      </form>
    </div>
  )
}
export default CreateTeam
