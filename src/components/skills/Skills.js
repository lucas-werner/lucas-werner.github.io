import React from 'react';
import {Box} from "@mui/material";
import TagsCanvas from 'react-tags-canvas'
import {info} from "../../info/Info";

const specialWords = (str, fWeight) => (
    <span style={{
        ...(fWeight && { fontWeight: fWeight }),
        background: info.gradient, 
        WebkitBackgroundClip: 'text', 
        WebkitTextFillColor: 'transparent'
    }}>
        {str}
    </span>
)

export default function Skills() {


    return (
        <Box 
            component={'main'} 
            display={'flex'} 
            flexDirection={{xs: 'column', md: 'row'}}
            alignItems={'center'}
            justifyContent={'center'} 
            height={'100%'}
            width={'100%'}
        >
            <Box
                display={'flex'} 
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'center'} 
            >
                {/* <h1>.</h1> */}
                <Box 
                    component={'h1'}
                    px={{xs: '2rem', md: '3rem'}}
                    fontSize={'2.5rem'} 
                    fontFamily={'Courier New, Courier, monospace'}
                >
                    {specialWords('Skills and Tecnologies')}
                </Box>
                <Box 
                    py={{xs: '1rem', md: '2rem'}} 
                    px={{xs: '2rem', md: '3rem'}}
                    fontSize={'1.0rem'} 
                    fontFamily={'Courier New, Courier, monospace'}
                >
                    Hi, I'm an {specialWords('Full Stack Web Developer', 800)} who 
                    loves to explore new technologies and build cool web applications.
                </Box>
                <Box 
                    px={{xs: '2rem', md: '3rem'}}
                    fontSize={'1.0rem'} 
                    fontFamily={'Courier New, Courier, monospace'}
                >
                    I started my career working as a Lawyer and over time I migrated to ​​web development. It seemed cooler, more versatile and exciting. I'm really glad I took the decision to change my career.                    
                </Box>
                <Box 
                    py={{xs: '1rem', md: '2rem'}} 
                    px={{xs: '2rem', md: '3rem'}}
                    fontSize={'1.0rem'} 
                    fontFamily={'Courier New, Courier, monospace'}
                >
                    Today, the technologies I use the most are: {specialWords('JavaScript', 800)}, {specialWords('React', 800)}, {specialWords('Redux', 800)}, 
                    {' '}{specialWords('NodeJS', 800)}, {specialWords('Express', 800)}, 
                    {' '}{specialWords('SQL', 800)} and {specialWords('PostgreSQL', 800)}.
                </Box>
            </Box>
            <Box 
                display={'flex'} 
                flexDirection={{xs: 'column', md: 'row'}}
                alignItems={'center'}
                justifyContent={'center'} 
                width={'100%'}
                minHeight={'calc(100vh - 175px)'}
            >
                <TagsCanvas
                    textColour={null}
                    maxSpeed={0.12}
                    freezeActive
                    shuffleTags
                    noSelect
                    wheelZoom={false}
                    width='500'
                    height='500'
                    style={{
                        maxWidth: '1000px',
                        width: '100%',
                        zIndex: '99',
                        position: 'relative',
                        margin: '0 auto',
                    }}
                    // textFont='Helvetica'
                    // pinchZoom
                    tags={[
                        (
                            <Box 
                                fontFamily={'Courier New, Courier, monospace'}
                            >
                                {specialWords('Javascript')}
                            </Box>
                        ),
                        (
                            <Box 
                                fontFamily={'Courier New, Courier, monospace'}
                            >
                                {specialWords('SQL')}
                            </Box>
                        ),
                        (
                            <Box 
                                fontFamily={'Courier New, Courier, monospace'}
                            >
                                {specialWords('CSS')}
                            </Box>
                        ),
                        (
                            <Box 
                                fontFamily={'Courier New, Courier, monospace'}
                            >
                                {specialWords('HTML')}
                            </Box>
                        ),
                        //(
                        //    <Box 
                        //        fontFamily={'Courier New, Courier, monospace'}
                        //    >
                        //        {specialWords('Python')}
                        //    </Box>
                        //    ),
                        //(
                        //    <Box 
                        //        fontFamily={'Courier New, Courier, monospace'}
                        //    >
                        //        {specialWords('Webpack')}
                        //    </Box>
                        //),
                        (
                            <Box 
                                fontFamily={'Courier New, Courier, monospace'}
                            >
                                {specialWords('React')}
                            </Box>
                        ),
                        (
                            <Box 
                                fontFamily={'Courier New, Courier, monospace'}
                            >
                                {specialWords('Redux')}
                            </Box>
                        ),
                        //(
                        //    <Box 
                        //        fontFamily={'Courier New, Courier, monospace'}
                        //    >
                        //        {specialWords('Canvas')}
                        //    </Box>
                        //),
                        //(
                        //    <Box 
                        //        fontFamily={'Courier New, Courier, monospace'}
                        //    >
                        //        {specialWords('_lodash')}
                        //    </Box>
                        //),
                        (
                            <Box 
                                fontFamily={'Courier New, Courier, monospace'}
                            >
                                {specialWords('Express')}
                            </Box>
                        ),
                        //(
                        //    <Box 
                        //        fontFamily={'Courier New, Courier, monospace'}
                        //    >
                        //        {specialWords('BootStrap')}
                        //    </Box>
                        //),
                        (
                            <Box 
                                fontFamily={'Courier New, Courier, monospace'}
                            >
                                {specialWords('NodeJS')}
                            </Box>
                        ),
                        (
                            <Box 
                                fontFamily={'Courier New, Courier, monospace'}
                            >
                                {specialWords('Git')}
                            </Box>
                        ),
                        //(
                        //    <Box 
                        //        fontFamily={'Courier New, Courier, monospace'}
                        //    >
                        //        {specialWords('Docker')}
                        //    </Box>
                        //),
                        //(
                        //    <Box 
                        //        fontFamily={'Courier New, Courier, monospace'}
                        //    >
                        //        {specialWords('Jenkins')}
                        //    </Box>
                        //),
                        //(
                        //    <Box 
                        //        fontFamily={'Courier New, Courier, monospace'}
                        //    >
                        //        {specialWords('Pandas')}
                        //    </Box>
                        //),
                        //(
                        //    <Box 
                        //        fontFamily={'Courier New, Courier, monospace'}
                        //    >
                        //        {specialWords('Scikit-Learn')}
                        //    </Box>
                        //),
                        //(
                        //    <Box 
                        //        fontFamily={'Courier New, Courier, monospace'}
                        //    >
                        //        {specialWords('Tensorflow')}
                        //    </Box>
                        //),
                        //(
                        //    <Box 
                        //        fontFamily={'Courier New, Courier, monospace'}
                        //    >
                        //        {specialWords('Keras')}
                        //    </Box>
                        //),
                        //(
                        //    <Box 
                        //        fontFamily={'Courier New, Courier, monospace'}
                        //    >
                        //        {specialWords('Django')}
                        //    </Box>
                        //),
                    ]}
                />
            </Box>
        </Box>
        )
}