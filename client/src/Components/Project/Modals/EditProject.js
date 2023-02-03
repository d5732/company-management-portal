import React, { useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel'

import api from '../../../Services/api'
import '../Project.css'
import { TextField } from '@mui/material'
const EditProject = ({ companyId, teamId, projectId, setEditModal, oldName, oldDescription }) => {
  const [name, setName] = useState(oldName)
  const [description, setDescription] = useState(oldDescription)


  const handleSubmit = () => {
    api
      .patch(`/company/${companyId}/teams/${teamId}/projects`, {
        id: projectId,
        name: name,
        description: description,
      })
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  return (
    <div className='modal-container'>
      <form onSubmit={handleSubmit}>
        <CancelIcon
          onClick={() => setEditModal(false)}
          className='modal-cancel-btn'
        />
        <input
          type='text'
          name='name'
          placeholder='name'
          value={name}
          onChange={handleNameChange}
          required
        />
        <textarea className='text-area'
          type='text'
          name='description'
          placeholder='description'
          value={description}
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
