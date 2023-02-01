import React from 'react'
import { useState, useEffect } from 'react'
import './Announcement.css'
import api from '../../Services/api'

const AnnouncementCard = ({ user }) => {
  const [announcementData, setAnnouncementData] = useState(null)

  const companyId = JSON.parse(localStorage.getItem('companyId'))

  useEffect(() => {
    api.get(`/company/${companyId}/announcements`).then((resp) => {
      setAnnouncementData(resp.data)
    })
  }, [])

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp)
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const month = months[date.getMonth()]
    const day = date.getDate()
    const year = date.getFullYear()

    return `${month} ${day}, ${year}`
  }

  const renderCard = (() => {
    if (!announcementData) return
    return announcementData.map(({ id, title, author, date, message }) => {
      return (
        <div key={id} className='ann-card-wrapper'>
          <div className='ann-card-header'>
            <p>{`${author.profile.firstName} ${author.profile.lastName}`}</p>
            {formatTimestamp(date)}
          </div>
          <h3>{title}</h3>
          <div className='ann-card-content'>
            <h4>{message}</h4>
          </div>
        </div>
      )
    })
  })()

  return <div className='ann-card-container'>{renderCard}</div>
}
export default AnnouncementCard
