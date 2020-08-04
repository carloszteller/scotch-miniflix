import React from 'react';
import Nav from './Nav';
import { Container, Typography } from '@material-ui/core';
import { isLoggedIn } from '../utils/AuthService';
import axios from 'axios';

const Display = () => {
    return (
        <div>
            <Nav />

            <Container>
                <Typography
                    component="h1"
                    variant="h2"
                    className="text-center"
                >
                    Latest Videos on Miniflix
                </Typography>
            </Container>
        </div>
    );
}

export default Display;