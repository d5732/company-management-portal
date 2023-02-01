import React, { useState, useEffect } from 'react'
import AddUser from './Modals/AddUser'
import api from '../../Services/api'
import './User.css'

const UserContainer = () => {
  const [users, setUsers] = useState(null)
  const [modal, setModal] = useState(false)

  const companyId = JSON.parse(localStorage.getItem('companyId'))

  useEffect(() => {
    api.get(`/company/${companyId}/users`).then((response) => {
      setUsers(response.data)
    })
  }, [])

  console.log("COMPANY ID", companyId)
  console.log("USERS", users)


  const userTableData = (users && users.map((user) => ({
    name: user.profile.firstName + ' ' + user.profile.lastName,
    email: user.profile.email,
    phone: user.profile.phone,
    team: user.teams[0].name,
    active: user.active,
    admin: user.admin,
    status: user.status,
  })))

  return (
    <div className="user-card-container">
      <h1 className="userHeading">User Registry</h1>
      <h2 className="userSubHeading">
        A general view of all members in your orginazation
      </h2>
      <table>
        <tr className="table-heading">
          {['Name', 'Email', 'Phone', 'Team', 'Active', 'Admin', 'Status'].map(
            (x) => {
              return <th>{x}</th>
            }
          )}
        </tr>
        {userTableData && userTableData.map((user) => {
          return (
            <tr className="table-data">
              <td className="name">{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.team}</td>
              <td style={{ color: user.active ? 'green' : 'red' }}>
                {user.active ? 'YES' : 'NO'}
              </td>
              <td style={{ color: user.admin ? 'green' : 'red' }}>
                {user.admin ? 'YES' : 'NO'}
              </td>
              <td>{user.status}</td>
            </tr>
          )
        })}
      </table>

      <div>
        {modal && <AddUser setModal={setModal} />}
        <button className="user-add-btn" onClick={() => setModal(true)}>
          <p>ADD USER</p>
        </button>
      </div>
    </div>
  )
}

export default UserContainer
