import { Avatar, Button, Grid, Paper, TextField } from '@mui/material'
import React from 'react'
import { useRecoilState } from 'recoil'
import logo from '../../Assets/logo.png'
import { Navigate } from 'react-router-dom'
import { errorState, userState } from '../../globalstate'
import { login } from '../../Services/users'
import './Login.css'

const Login = () => {
  const [user, setUser] = useRecoilState(userState)
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = useRecoilState(errorState)

  const handleLogin = async () => {
    if (username === '' || password === '') {
      setError({ isError: true, message: 'Please fill out all fields' })
      return
    }

    const response = await login(username, password).catch((err) => {
      console.error(err)
      setError({ isError: true, message: err.response?.data?.message ? err.response?.data?.message : "No response from server" })
    })

    if (response) {
      setError({ isError: false, message: '' })
      setUser({
        isLoggedIn: true,
        id: response.id,
        profile: response.profile,
        isAdmin: response.admin,
        active: response.active,
        status: response.status,
        companies: response.companies,
        teams: response.teams,
      })
    }
  }

  if (user.isLoggedIn) {
    return <Navigate replace to='/company' />
  } else {
    return (
      <div className='main-container'>
        <Grid className='grid-style'>
          <Grid align='center'>
           
            <h1 class="page-headers" style={{textTransform:"uppercase", marginBottom: "0"}}>Cook Systems</h1>
            <h2 style={{textTransform:"uppercase", marginBottom: "5rem"}}>A Final App</h2>
          </Grid>
          <Paper elevation={10} className='paper-style'>
          <Avatar className='avatar-style' src={logo} style={{marginBottom: "2rem"}}></Avatar>
            <TextField
              className='input-style'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{
                input: { color: '#1ba098' },
                label: { color: '#1ba098' },
              }}
              id='username'
              label='Username'
              type='text'
              required
            />
            <br />
            <TextField
              className='input-style'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ input: { color: '#1ba098' }, label: { color: '#1ba098' } }}
              label='Password'
              placeholder='Enter password'
              type='password'
              required
            />
            <br />
            <button
              className='form-submit-btn'
              type='submit'
              onClick={() => handleLogin()}
            >
              Login
            </button>
            {error.isError ? (
              <p style={{ color: 'red' }}>{error.message}</p>
            ) : null}
          </Paper>
        </Grid>
      </div>
    )
  }
}

export default Login
