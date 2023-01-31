import React from 'react'
import { useState } from 'react'
import mockData from '../../data.json'
import './User.css'


const UserContainer = () => {
  const [users, setUser] = useState(mockData.data.users)

  const userTableData = users.map((user) => ({
    name: user.profile.firstname + ' ' + user.profile.lastname,
    email: user.profile.email,
    phone: user.profile.phone,
    team: user.teams[0].name,
    active: user.active === true ? "YES" : "NO",
    admin: user.isAdmin === true ? "YES" : "NO",
    status: user.status,
  }))

  return (
    <div className='user-card-container'>
      <h1>User Registry</h1>
      <h2>A general view of all members in your orginazation</h2>
      <table>
        <tr>
            {["Name","Email","Phone","Team","Active","Admin","Status"].map((x)=> {return <th>{x}</th>})}
        </tr>
        {userTableData.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
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

      <button onClick={()=>{console.log('Length:', users.length)}}>ADD USER</button>
    </div>
  )
}

export default UserContainer