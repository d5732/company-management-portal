import { toUnitless } from '@mui/material/styles/cssUtils'
import React from 'react'
import { useState } from 'react'
import mockData from '../../data.json'
import './Announcement.css'

const AnnouncementCard = () => {
  const [data, setData] = useState(mockData.data.announcement)

  console.log(mockData)

  const renderCard = data.map((announcement) => {
    return (
      <div key={announcement.id} className='announcement-card-wrapper'>
        <div className='card-header'>
          <h3>
            {announcement.author.firstname}, {announcement.title}
          </h3>
          {announcement.date}
        </div>
        <div className='card-content'>
          <h3>{announcement.message}</h3>
        </div>
      </div>
    )
  })
  return <div className='announcement-card-container'>{renderCard}</div>
}
export default AnnouncementCard
