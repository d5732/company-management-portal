import React from 'react'
import { useState, useEffect } from 'react'
import mockData from '../../data.json'
import AddUser from './Modals/AddUser'
import api from '../../Services/api'
import './User.css'


const UserContainer = () => {
  const [users, setUser] = useState(mockData.data.users)
  const [modal, setModal] = useState(false)

  const userTableData = users.map((user) => ({
    name: user.profile.firstname + ' ' + user.profile.lastname,
    email: user.profile.email,
    phone: user.profile.phone,
    team: user.teams[0].name,
    active: user.active === true ? "YES" : "NO",
    admin: user.isAdmin === true ? "YES" : "NO",
    status: user.status,
  }))

  useEffect(() => {
    fetch(`http://localhost:8080/company/6/teams`)
      .then((resp) => resp.json())
      .then((data) => console.log(data))
    // .then(resp => {
    //   setData(resp.data)
    //   console.log(resp.data)
    //   console.log(data)
    // })
  }, [])

  return (
    <div className="user-card-container">
      <h1 className="userHeading">User Registry</h1>
      <h2 className="userSubHeading">
        A general view of all members in your orginazation
      </h2>
      <table>
        <tr className='table-heading'>
          {['Name', 'Email', 'Phone', 'Team', 'Active', 'Admin', 'Status'].map(
            (x) => {
              return <th>{x}</th>
            }
          )}
        </tr>
        {userTableData.map((user) => {
          return (
            <tr className='table-data'>
              <td className='name'>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.team}</td>
              <td
                style={{
                  color: { if: user.active === 'YES' ? 'green' : 'red' },
                }}
              >
                {user.active}
              </td>
              <td
                style={{
                  color: { if: user.admin === 'YES' ? 'green' : 'red' },
                }}
              >
                {user.admin}
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