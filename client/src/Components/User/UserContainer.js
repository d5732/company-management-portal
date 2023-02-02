import React, { useState, useEffect } from 'react'
import AddUser from './Modals/AddUser'
import api from '../../Services/api'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import './User.css'

const UserContainer = () => {
  const [users, setUsers] = useState(null)
  const [modal, setModal] = useState(false)

  const companyId = JSON.parse(localStorage.getItem('companyId'))

  const currentUserId = JSON.parse(localStorage.getItem("recoil-persist")).userState.id

  useEffect(() => {
    api.get(`/company/${companyId}/users`).then((response) => {
      setUsers(response.data)
    })
  }, [])

  const userTableData =
    users &&
    users.map((user) => ({
      name: user?.profile.firstName + ' ' + user?.profile.lastName,
      email: user?.profile.email,
      phone: user?.profile.phone,
      team: user?.teams[0]?.name,
      active: user?.active,
      admin: user?.admin,
      status: user?.status,
      id: user?.id,
    }))

  const handleClick = (id, activeBoolean) => {
    api.patch(`users/${id}`, {
      id: null,
      profile: null,
      isAdmin: null,
      active: !activeBoolean,
      status: null,
    })
    window.location.reload(true)
  }

  return (
    <div className='user-card-container'>
      <h1 className='userHeading'>User Registry</h1>
      <h2 className='userSubHeading'>
        A general view of all members in your orginazation
      </h2>
      <table>
        <tbody>
          <tr className='table-heading'>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Team</th>
            <th>Active</th>
            <th>Admin</th>
            <th>Status</th>
          </tr>
          {userTableData &&
            userTableData
              .sort((a, b) => b.active - a.active)
              .map((user) => {
                return (
                  <tr className='table-data' key={user.id}>
                    <td className='name'>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.team}</td>
                    <td style={{ color: user.active ? 'green' : 'red' }}>
                      <button
                        className='active-btn'
                        onClick={() => handleClick(user.id, user.active)}
                        disabled={user.id === currentUserId}
                      >
                        {user.active ? (
                          <CheckBoxIcon className='user-check-btn' />
                        ) : (
                          <CheckBoxOutlineBlankIcon className='user-check-btn' />
                        )}
                      </button>
                    </td>
                    <td style={{ color: user.admin ? 'green' : 'red' }}>
                      {user.admin ? 'YES' : 'NO'}
                    </td>
                    <td>{user.status}</td>
                  </tr>
                )
              })}
        </tbody>
      </table>
      {modal && <AddUser setModal={setModal} />}
      <button className='user-add-btn' onClick={() => setModal(true)}>
        <p>ADD USER</p>
      </button>
    </div>
  )
}

export default UserContainer
