import React from 'react'
import { useState, useEffect } from 'react'
import './Announcement.css'
import api from '../../Services/api'

const AnnouncementCard = ({ handleUser }) => {
  const [announcementData, setAnnouncementData] = useState(null)

  useEffect(() => {
    api.get(`/company/${handleUser()}/announcements`).then((resp) => {
      setAnnouncementData(resp.data)
    })
  }, [])

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const renderCard = (() => {
    if (!announcementData) return
    return announcementData
      .sort((a, b) => {
        a.date = new Date(a.date)
        b.date = new Date(b.date)
        return b.date - a.date
      })
      .map(({ id, title, author, date, message }) => {
        return (
            <div key={id} className="ann-card-wrapper" style={{padding: "2rem 4rem"}}>
                <div className="ann-card-header">
                    <h2
                       style={{fontWeight:400}} 
                    >{`${author.profile.firstName} ${author.profile.lastName}`}</h2>

                    <h2 style={{ color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>
                        {new Date(date).toLocaleDateString("en-US", options)}
                    </h2>
                </div>
                <h2 style={{ fontWeight: 400 }}>{title}</h2>
                <div className="ann-card-content">
                    <p style={{fontSize: "1.1rem", lineHeight:"2"}}>{message}</p>
                </div>
            </div>
        );
      })
  })()

  return <div className='ann-card-container'>{renderCard}</div>
}
export default AnnouncementCard
