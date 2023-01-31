import React from 'react'
import { useState } from 'react'
import mockData from '../../data.json'
import CreateTeam from './Modals/CreateTeam'
import './Team.css'

const TeamCard = () => {
  const [data, setData] = useState(mockData.data.teams)
  const [modal, setModal] = useState(false)

  console.log(data)

  const renderCard = data.map((team) => {
    return (
      <div key={team.id} className='team-card-wrapper'>
        <div className='card-header'>
          <h3>{team.name}</h3>
          <p># of projects: 2</p>
        </div>
        <hr className='team-line' />
        <div className='card-content'>
          <p>Members</p>
          <div className='team-users-container'>
            {team.users.map((user) => (
              <h1 className='user-badge' key={user.profile.firstname}>
                {user.profile.firstname}
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
      {modal && <CreateTeam setModal={setModal} data={data} />}
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
