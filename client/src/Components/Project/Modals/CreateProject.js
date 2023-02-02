import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import CancelIcon from '@mui/icons-material/Cancel'

import api from '../../../Services/api'

const CreateProject = ({ teamsData, setAddModal }) => {
  const [name, setName] = useState(null)
  const [teamName, setTeamName] = useState()
  const [description, setDescription] = useState(null)
  const [teamId, setTeamId] = useState(null)

  const handleSubmit = () => {
    api
      .post(`teams/${teamId}/projects`, {
        id: null,
        name: name,
        description: description,
        active: true,
        team: {},
      })
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }
  const handleTeamIdChange = (e) => {
    setTeamId(e.target.value)
  }
  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value)
  }

  return (
    <div className='modal-container'>
      <form onSubmit={handleSubmit}>
        <CancelIcon
          onClick={() => setAddModal(false)}
          className='modal-cancel-btn'
        />
        <input
          type='text'
          name='name'
          placeholder='name'
          minlength='4'
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          type='text'
          name='description'
          placeholder='description'
          value={description}
          onChange={handleDescriptionChange}
        />
        <Select
          className='modal-select'
          value={teamName || ''}
          onChange={(e) => {
            handleTeamIdChange(e)
            handleTeamNameChange(e)
          }}
          defaultValue=''
        >
          {teamsData.map((team) => (
            <MenuItem key={team.id} value={team.id}>
              {team.name}
            </MenuItem>
          ))}
        </Select>
        <button className='form-submit-btn' disabled={!name || !teamId}>
          Submit
        </button>
      </form>
    </div>
  )
}
export default CreateProject