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
      <div key={announcement.id} className='announcement-card-container'>
        <div className='card-header'></div>
        <h3>{announcement.title}</h3>
      </div>
    )
  })
  return <div>{renderCard}</div>
}
export default AnnouncementCard
