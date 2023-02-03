import * as React from 'react'
import logo from '../../Assets/logo.png'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'
import { userState } from '../../globalstate'
import LogoutIcon from '@mui/icons-material/Logout'
import { useRecoilState } from 'recoil'
import './NavBar.css'

const NavBar = () => {
  const [user, setUser] = useRecoilState(userState)
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })
  const anchor = 'top'
  const [toggled, setToggled] = React.useState(true)

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
    setToggled(!toggled)
  }

  function checkAdminNav() {
    if (user.isAdmin) {
      return ['Announcements', 'Projects', 'Teams', 'Users', 'Company']
    } else {
      return ['Announcements', 'Projects']
    }
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className='nav-list'>
        {checkAdminNav().map((text, index) => (
          <ListItem className='nav-list-item' key={text} disablePadding>
            <Link className='nav-link' to={'/' + text.toLowerCase()}>
              <ListItemButton className='nav-list-btn'>
                <ListItemText className='nav-list-text' primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <ListItem className='nav-list-item' key={'logout'} disablePadding>
          <ListItemButton
            className='nav-list-btn'
            onClick={() => {
              setUser({})
              localStorage.clear()
            }}
          >
            <ListItemText primary='Logout' />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  )

  return (
    <div className='navbar-container'>
      <LogoutIcon
        className='logout-btn'
        onClick={() => {
          setUser({})
          localStorage.clear()
        }}
      />
      {/* <Link to='/announcements'>
        <img className='nav-logo' src={logo} alt='company logo' />
      </Link> */}
      {user.isAdmin ? (
        <h1 className='nav-header'>{`${user.profile.firstName}: Admin`}</h1>
      ) : (
        <h1 className='nav-header'>{user.profile.firstName}</h1>
      )}
      {toggled ? (
        <Button className='nav-icon-btn' onClick={toggleDrawer(anchor, true)}>
          <MenuIcon className='nav-icon' />
        </Button>
      ) : (
        <Button
          className='nav-icon-close-btn'
          onClick={toggleDrawer(anchor, false)}
        >
          <CloseIcon className='nav-close-icon' />
        </Button>
      )}
      <Drawer
        sx={{ zIndex: '99' }}
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </div>
  )
}

export default NavBar
