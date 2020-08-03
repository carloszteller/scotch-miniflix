import React from 'react';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const Nav = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        MiniFlix
                    </Typography>
                    <Button color="inherit" className="ml-auto">All Movies</Button>

                    {
                        (isLoggedIn()) ? <Button color="inherit">Upload Videos</Button> : ''
                    }

                    {
                        (isLoggedIn()) ? <Button color="inherit" onClick={logout()}>Logout</Button> : <Button color="inherit" onClick={login}>Login</Button> 
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Nav;