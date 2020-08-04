import React from 'react';
import Nav from './Nav';
import { Container, Typography, Box, Button } from '@material-ui/core';

const Upload = () => {
    const uploadWidget = () => {
        window.cloudinary.openUploadWidget({
            cloud_name: 'ct-cloudinary-test',
            upload_preset: 'miniflix',
            tags: ['miniflix'],
            sources: ['local', 'url', 'google_photos', 'facebook', 'image_search']
        }, (err, res) => {
            console.log(`This is the result of the last upload: ${res}`);
        });
    }

    return (
        <div>
            <Nav />

            <Container>
                <Typography
                    component="h1"
                    variant="h2"
                    className="text-center"
                >
                    Upload Your 20-second Video in a Jiffy
                </Typography>

                <Box className="text-center">
                    <Button variant="contained" onClick={uploadWidget}>
                        Upload Video
                    </Button>
                </Box>
            </Container>
        </div>
    );
}

export default Upload;