import React, { useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel'

import api from '../../../Services/api'
import '../Project.css'
const EditProject = ({ companyId, teamId, projectId, setEditModal}) => {
  const [name, setName] = useState(null)
  const [description, setDescription] = useState(null)

  const handleSubmit = () => {
    localStorage.setItem("Antonio1", "Hello")
    api
      .patch(`/company/${companyId}/teams/${teamId}/projects`, {
        id: projectId,
        name: name,
        description: description,
      })
      .then((resp) => localStorage.setItem('Antonio2', 'Bye'))
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  return (
    <div className="project-modal-container">
      <form onSubmit={handleSubmit}>
        <CancelIcon
          onClick={() => setEditModal(false)}
          className="modal-cancel-btn"
        />
        <input
          type="text"
          name="name"
          placeholder=" name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <button className="form-submit-btn">Submit</button>
      </form>
    </div>
  )
}
export default EditProject