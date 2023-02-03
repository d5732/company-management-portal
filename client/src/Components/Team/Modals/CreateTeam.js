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
    api.post(`company/${companyId}/teams`, {
      name: teamName,
      description: teamDesc,
      users: newArr,
    })
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
    <div className='modal-container'>
      <form onSubmit={handleSubmit}>
        <CancelIcon
          onClick={() => setModal(false)}
          className='modal-cancel-btn'
        />
        <input
          type='text'
          name='teamName'
          minlength='4'
          maxlength='30'
          placeholder='team name'
          value={teamName}
          onChange={handleNameChange}
          required
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
          className='modal-select'
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
          {employees
            .filter((employee) => employee.active)
            .map((employee) => (
              <MenuItem
                key={employee.id}
                value={`${employee.profile.firstName} ${employee.profile.lastName[0]}.`}
                onClick={() => {
                  const safeCopy = new Set(employeeId)
                  if (!safeCopy.has(employee.id)) {
                    safeCopy.add(employee.id)
                  } else {
                    safeCopy.delete(employee.id)
                  }
                  setEmployeeId(safeCopy)
                }}
              >
                {`${employee.profile.firstName} ${employee.profile.lastName}`}
              </MenuItem>
            ))}
        </Select>
        <button className='form-submit-btn' disabled={teamUsers.length < 1}>
          Submit
        </button>
      </form>
    </div>
  )
}
export default CreateTeam
