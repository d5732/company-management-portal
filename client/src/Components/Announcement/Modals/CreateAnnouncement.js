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
  }

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleMessage = (e) => {
    setBodyMessage(e.target.value)
  }

  return (
    <div className='modal-container'>
      <form onSubmit={handleSubmit}>
        <CancelIcon
          onClick={() => setModal(false)}
          className='modal-cancel-btn'
        />
        <input
          type='text'
          name='title'
          minlength='4'
          maxlength='40'
          placeholder='Announcement title'
          value={title}
          onChange={handleTitle}
          required
        />
        <textarea
          className='text-area'
          type='text'
          name='message'
          minlength='4'
          placeholder='Announcement message'
          value={bodyMessage}
          onChange={handleMessage}
          required
        />
        <button className='form-submit-btn'>Submit</button>
      </form>
    </div>
  )
}
export default CreateAnnouncement
