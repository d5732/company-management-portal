import React, { useState } from 'react'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import CancelIcon from '@mui/icons-material/Cancel'
import api from '../../../Services/api'
import '../Team.css'

const CreateTeam = ({ setModal, employees, companyId }) => {
  const [teamName, setTeamName] = useState('')
  const [teamDesc, setTeamDesc] = useState('')
  const [teamUsers, setTeamUsers] = useState([])
  const [employeeId, setEmployeeId] = useState(new Set())

  const array = Array.from(employeeId)
  const newArr = []

  for (let i = 0; i < array.length; i++) {
    newArr.push({ id: array[i] })
  }

  const handleSubmit = () => {
    api
      .post(`company/${companyId}/teams`, {
        name: teamName,
        description: teamDesc,
        users: newArr,
      })
      .then((resp) => console.log(resp))
  }

  const handleUserChange = (e) => {
    const {
      target: { value },
    } = e
    setTeamUsers(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
  }

  const handleNameChange = (e) => {
    setTeamName(e.target.value)
  }

  const handleDescChange = (e) => {
    setTeamDesc(e.target.value)
  }

  return (
    <div className='team-modal-container'>
      <form onSubmit={handleSubmit}>
        <CancelIcon
          onClick={() => setModal(false)}
          className='modal-cancel-btn'
        />
        <input
          type='text'
          name='teamName'
          placeholder='team name'
          value={teamName}
          onChange={handleNameChange}
        />
        <input
          type='text'
          name='teamDescription'
          placeholder='description'
          value={teamDesc}
          onChange={handleDescChange}
        />
        <h2>Select Members</h2>
        <Select
          className='team-modal-select'
          multiple
          value={teamUsers}
          onChange={handleUserChange}
          input={<OutlinedInput id='select-multiple-chip' />}
          renderValue={(selected) => (
            <Box className='select-box'>
              {selected.map((value) => (
                <Chip className='select-chip' key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {employees.map((name) => (
            <MenuItem
              key={name.id}
              value={`${name.profile.firstName} ${name.profile.lastName[0]}.`}
              onClick={() => {
                const safeCopy = new Set(employeeId)
                if (!safeCopy.has(name.id)) {
                  safeCopy.add(name.id)
                } else {
                  safeCopy.delete(name.id)
                }
                setEmployeeId(safeCopy)
              }}
            >
              {`${name.profile.firstName} ${name.profile.lastName}`}
            </MenuItem>
          ))}
        </Select>
        <button className='form-submit-btn'>Submit</button>
      </form>
    </div>
  )
}
export default CreateTeam
