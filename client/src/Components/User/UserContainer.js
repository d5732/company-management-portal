import React from 'react'
import { useState, useMemo } from 'react'
import mockData from '../../data.json'
import userTableColumns from './userTableColumns'
import { useTable } from 'react-table'


const UserContainer = () => {
  const [users, setUser] = useState(mockData.data.users)

  const userTableData = users.map((user) => ({
    name: user.profile.firstname + ' ' + user.profile.lastname,
    email: user.profile.email,
    phone: user.profile.phone,
    team: user.teams[0].name,
    active: user.active === true ? "YES" : "NO",
    admin: user.admin === true ? "YES" : "NO",
    status: user.status,
  }))
  
  const columns = useMemo(() => userTableColumns, [])
  const data = useMemo(() => [...userTableData, userTableData])

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    })

  return (
    <div>
      <h1>User Registry</h1>
      <h2>A general view of all members in your orginazation</h2>
      <>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {
              rows.map((row, i) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {
                      row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render('Cell')}
                          </td>
                        )
                      })
                    }
                  </tr>
                )
            })
        }
          </tbody>
        </table>
      </>

      <button>ADD USER</button>
    </div>
  )
}

export default UserContainer
