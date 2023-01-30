import React from 'react'
import { useState } from 'react'
import mockData from '../../data.json'


// import { readFile } from 'fs/promises'
// const json = JSON.parse(
    //   await readFile(new URL('../../data.JSON', import.meta.url))
    // )
    
const UserContainer = () => {
    const [users, setUser] = useState(mockData.data.users)

    console.log(users)

        return (
            <div>
              <h1>User Registry</h1>
              <h2>A general view of all members in your orginazation</h2>
              <h3>{users[0].id}</h3>
              
              <button>ADD USER</button>
              {/* <button onClick={() => console.log({card.data.users[0]})}>debug</button> */}
          </div>
        )
}

export default UserContainer
