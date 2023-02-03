import React, { useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel'

import api from '../../../Services/api'
import '../Project.css'
import { TextField } from '@mui/material'

const EditProject = ({ name, description, companyId, teamId, projectId, setEditModal }) => {
  const [newName, setNewName] = useState(name)
  const [newDescription, setNewDescription] = useState(description)


  const handleSubmit = () => {
    api
      .patch(`/company/${companyId}/teams/${teamId}/projects`, {
        id: projectId,
        name: newName,
        description: newDescription,
      })
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handleDescriptionChange = (e) => {
    setNewDescription(e.target.value)
  }

  return (
    <div className='edit-modal-container'>
      <form onSubmit={handleSubmit}>
        <CancelIcon
          onClick={() => setEditModal(false)}
          className='modal-cancel-btn'
        />
        <input
          type='text'
          name='name'
          placeholder={name}
          value={newName}
          onChange={handleNameChange}
          required
        />
        <textarea className='text-area'
          type='text'
          name='description'
          placeholder='description'
          value={newDescription}
          onChange={handleDescriptionChange}
          required
        />
        <button className='form-submit-btn' disabled={!name}>
          Submit
        </button>
      </form>
    </div>
  )
}
export default EditProject
