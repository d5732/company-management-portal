import React from 'react'
import { useState } from 'react'
import CreateTeam from './Modals/CreateTeam'
import api from '../../Services/api'

import './Team.css'
import { useEffect } from 'react'

const TeamCard = ({ user }) => {
  const [teamData, setTeamData] = useState(null)
  const [modal, setModal] = useState(false)
  const [employees, setEmployees] = useState(null)
  
  const companyId = JSON.parse(localStorage.getItem('companyId'))
  
  useEffect(() => {
    api.get(`/company/${companyId}/projects`).then((resp) => {
      setTeamData(resp.data)
    })
    api.get(`/company/${companyId}/users`).then((resp) => {
      setEmployees(resp.data)
    })
  }, [])

  if (!teamData) return null
  console.log(teamData)

  const renderCard = teamData.sort((a, b) => b.id - a.id).map((team) => {
    return (
      <div key={team.id} className='team-card-wrapper'>
        <div className='card-header'>
          <h3>{team.name}</h3>
          <p># of projects: {team.projects.length}</p>
        </div>
        <hr className='team-line' />
        <div className='card-content'>
          <p>Members</p>
          <div className='team-users-container'>
            {team.users.map((user) => (
              <h1 className='user-badge' key={user.profile.firstName}>
                {`${user.profile.firstName} ${user.profile.lastName[0]}.`}
              </h1>
            ))}
          </div>
        </div>
      </div>
    )
  })

  return (
    <>
      <div className='team-card-container'>
        {modal && (
          <CreateTeam
            companyId={companyId}
            setModal={setModal}
            employees={employees}
            user={user}
          />
        )}
        {renderCard}
        <button className='team-add-btn' onClick={() => setModal(true)}>
          <div className='placeholder-card'>
            <h3>+</h3>
            <p>New Team</p>
          </div>
        </button>
      </div>
    </>
  )
}
export default TeamCard
