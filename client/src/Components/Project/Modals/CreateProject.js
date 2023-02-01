import React, { useState }from 'react'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import CancelIcon from '@mui/icons-material/Cancel'



import api from '../../../Services/api'

const CreateProject = ({ teamsData, setModal }) => {
   const [name, setName] = useState(null)
   const [description, setDescription] = useState(null)
   const [teamId, setTeamId] = useState(null)

   const handleSubmit = () => {
     api
       .post(`teams/${teamId}/projects`, {
         id: null,
         name: name,
         description: description,
         active: true,
         team: {}
       })
       .then((resp) => console.log("HELLO", resp))
   }

   const handleNameChange = (e) => {
     setName(e.target.value)
   }
   const handleDescriptionChange = (e) => {
     setDescription(e.target.value)
   }
   const handleTeamIdChange = (e) => {
      console.log('TARGET', e.target.value)
     setTeamId(e.target.value)
   }
  return (
    <div className="project-modal-container">
      <form onSubmit={handleSubmit}>
        <CancelIcon
          onClick={() => setModal(false)}
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
        <Select
          className="team-select"
          value={teamsData}
          onChange={handleTeamIdChange}
        >
          {teamsData.map((team) => (
            <MenuItem
              key={team.name}
              value={team.id}
            >
              {team.name}
            </MenuItem>
          ))}
        </Select>
        <button className="form-submit-btn" disabled={!name || !teamId}>Submit</button>
      </form>
      <button
        onClick={() => console.log('EEEEE', teamId)}
        className="form-submit-btn"
      >
        debug
      </button>
    </div>
  )
}
export default CreateProject