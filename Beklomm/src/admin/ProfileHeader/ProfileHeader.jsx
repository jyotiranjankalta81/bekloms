import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logout from '@mui/icons-material/Logout';
import user from '../assets/images/user.png'
import {Link, useNavigate} from 'react-router-dom';

const ProfileHeader = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const _logoutfun = () => {
        var mytoken = sessionStorage.getItem("token");
        alert(mytoken);
        // return false;
        if (mytoken) {
          sessionStorage.removeItem("token");
          setTimeout(() => {
            navigate("/login");
            window.location.reload();
          }, 700);
        }
      };

    return (
        <>
            <div className="adminnavbar">
                <h2>Welcome to: Beklom</h2>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        // sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar src={user} alt="admin" sx={{ width: 52, height: 52 }}/>
                    </IconButton>
                </Tooltip>
            </div>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                // onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                <ListItemIcon>
                        <AccountCircleIcon fontSize="small" />
                    </ListItemIcon>
                    {/* <Avatar />  */}
                    Profile
                </MenuItem>
                {/* <Divider /> */}
                <MenuItem>
                <Link to="/adduser" style={{textDecoration:"none",color:"grey"}}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another User
                </Link>
                </MenuItem>
                <MenuItem>
                <Link to="/resetpassword" style={{textDecoration:"none",color:"grey"}}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    reset password
                </Link>
                </MenuItem>
                <MenuItem onClick={_logoutfun}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>

        </>
    )
}

export default ProfileHeader

