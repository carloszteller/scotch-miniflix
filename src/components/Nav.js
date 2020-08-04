import React from 'react';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import { AppBar, Toolbar, Typography, Link, Button } from '@material-ui/core';

import '../App.css';

const Nav = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        <Link href="/" className="a">MiniFlix</Link>
                    </Typography>
                    <Link href="/" className="ml-auto mr-3 a">All Movies</Link>

                    {
                        (isLoggedIn()) ? <Link href="/upload" className="a mx-3">Upload Videos</Link> : ''
                    }

                    {
                        (isLoggedIn()) ? <Link className="a cursor-pointer" onClick={logout}>Logout</Link> : <Link className="a cursor-pointer" onClick={login}>Login</Link> 
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Nav;