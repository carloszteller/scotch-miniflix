import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import { Container, Typography, Grid } from '@material-ui/core';
import { isLoggedIn } from '../utils/AuthService';
import axios from 'axios';
import { CloudinaryContext, Transformation, Video } from 'cloudinary-react';

const Display = () => {
    const [videos, setVideos] = useState([]);

    const getVideos = () => {
        axios.get('http://res.cloudinary.com/unicodeveloper/video/list/miniflix.json')
            .then(res => {
                console.log(res.data.resources);
                
                setVideos(res.data.resources);
            });
    }

    useEffect(() => {
        getVideos();
    });

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

                <CloudinaryContext cloudName="unicodeveloper">
                    <Grid container spacing={3}>
                        {videos.map((video, i) => (
                            <Grid item key={video.public_id} xs={12} sm={6} md={3}>
                                <Video publicId={video.public_id} className="video" controls></Video>
                                <Typography variant="body2">Created at: {video.created_at}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </CloudinaryContext>
            </Container>
        </div>
    );
}

export default Display;