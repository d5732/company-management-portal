import React from 'react'
import AnnouncementCard from './AnnouncementCard'

const AnnouncementContainer = ({ user }) => {
  return (
    <div className='main-container'>
      <AnnouncementCard user={user} />
    </div>
  )
}

export default AnnouncementContainer
