import react, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux_hooks';
import './navbar.scss'
import { logoutUser } from '../../redux/features/auth/authThunk';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { pathConstant } from '../../constents/pathConstant';
const Navbar = () => {
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const user = useAppSelector<any>((s) => s.authData.logedInUser);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null)
    };

    const handleLogout = () => {
        dispatch(logoutUser(null)).unwrap().then((res:any) => {
            if (res?.success) {
                toast.success(res?.message)
                localStorage.removeItem('secret_key');
                localStorage.removeItem('persist:root');
                 navigate(pathConstant.users.login)
            } else {
                toast.error(res?.message)
            }
        })
    }
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src='logo.svg' alt='' />
                    <span>JitendraAdmin</span>
                </div>
                <div className="icons">
                    <img src="/search.svg" alt="" className="icon" />
                    <img src="/app.svg" alt="" className="icon" />
                    <img src="/expand.svg" alt="" className="icon" />
                    <div className='notification'>
                        <img src="/notifications.svg" alt="" />
                        <span>1</span>
                    </div>
                    <div className='user'>
                        {auth && (
                            <div className='user-popup'>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <img src={user && user?.avatar?.url || "https://www.svgrepo.com/show/343494/profile-user-account.svg"} alt="" />

                                </IconButton>
                                <Menu
                                    className="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem className='menu-item' onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                </Menu>
                            </div>
                        )}
                        <span>{user && (user?.name)?.toUpperCase()}</span>

                    </div>

                    {/* <img src='/settings.svg' alt="" className="icon" /> */}
                </div>
            </div>
        </>
    )
}

export default Navbar;