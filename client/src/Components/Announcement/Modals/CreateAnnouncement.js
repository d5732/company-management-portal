import React, { useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel'
import api from '../../../Services/api'

const CreateAnnouncement = ({ setModal, user }) => {
  const [title, setTitle] = useState('')
  const [bodyMessage, setBodyMessage] = useState('')

  const companyId = JSON.parse(localStorage.getItem('companyId'))

  const handleSubmit = () => {
    api
      .post(`/company/${companyId}/announcements`, {
        id: null,
        date: null,
        title: title,
        message: bodyMessage,
        author: {
          id: user.id,
          admin: true,
        },
      })
      .then((resp) => console.log(resp))
  }

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleMessage = (e) => {
    setBodyMessage(e.target.value)
  }

  return (
    <div className='team-modal-container'>
      <form onSubmit={handleSubmit}>
        <CancelIcon
          onClick={() => setModal(false)}
          className='modal-cancel-btn'
        />
        <input
          type='text'
          name='title'
          placeholder='Announcement title'
          value={title}
          onChange={handleTitle}
        />
        <textarea
          className='text-area'
          type='text'
          name='message'
          placeholder='Announcement message'
          value={bodyMessage}
          onChange={handleMessage}
        />
        <button className='form-submit-btn'>Submit</button>
      </form>
    </div>
  )
}
export default CreateAnnouncement
