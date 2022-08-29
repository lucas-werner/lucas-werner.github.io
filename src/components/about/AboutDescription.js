import React from 'react';
import {Box, Link} from "@mui/material";
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

export default function AboutDescription({linkBtn}) {
    return (
        <Box 
            component={'main'} 
            display={'flex'} 
            p={4}
            flexDirection={{xs: 'column', md: 'row'}}
            alignItems={'flex-start'}
            justifyContent={'flex-start'} 
            height={'100%'}
            width={'100%'}
        >
                <Box
                    display={'flex'} 
                    flexDirection={'column'}
                    alignItems={'flex-start'}
                    justifyContent={'center'} 
                    px={{xs: '2rem', md: '3rem'}}
                >
                    <Box 
                        component={'h1'}
                        textAlign={'left'}
                        fontSize={'2.0rem'} 
                        fontFamily={'Courier New, Courier, monospace'}
                    >
                        {specialWords('A little about me...')}
                    </Box>
                    <Box 
                        py={{xs: '1rem', md: '2rem'}}
                        px={{xs: '0.5rem', md: '1rem'}}
                        fontSize={'1.0rem'} 
                        fontFamily={'Courier New, Courier, monospace'}
                    >
                        Who is Werner you ask ?
                    </Box>
                  
                    <Box
                        // py={{xs: '1rem', md: '2rem'}} 
                        py={'0.3rem'}
                        px={{xs: '0.5rem', md: '1rem'}}
                        fontSize={'1.0rem'} 
                        fontFamily={'Courier New, Courier, monospace'}
                    >
                        My name is Lucas, but you can call me Werner.
                    </Box>
                    <Box   
                        px={{xs: '0.5rem', md: '1rem'}}
                        py={'0.3rem'}
                        fontSize={'1.0rem'} 
                        fontFamily={'Courier New, Courier, monospace'}
                    >
                        Maybe I'm too tall to be a programmer (1.96m) - ouch my back!
                    </Box>
                    {/*<Box   
                        px={{xs: '0.5rem', md: '1rem'}}
                        py={'0.3rem'}
                        fontSize={'1.0rem'} 
                        fontFamily={'Courier New, Courier, monospace'}
                    >
                        But in the end everything works out and today I really enjoy programming 😎 
                    </Box>*/}
                    {/*<Box   
                        px={{xs: '0.5rem', md: '1rem'}}
                        py={'0.3rem'}
                        fontSize={'1.0rem'} 
                        fontFamily={'Courier New, Courier, monospace'}
                    >
                        I have a bachelor in Law
                    </Box>*/}
                    <Box   
                        px={{xs: '0.5rem', md: '1rem'}}
                        py={'0.3rem'}
                        fontSize={'1.0rem'} 
                        fontFamily={'Courier New, Courier, monospace'}
                    >
                      I play guitar in my spare time and I have a music project (@jennieandthejets). I think we rock 🤪
                    </Box>
                    <Box   
                        px={{xs: '0.5rem', md: '1rem'}}
                        py={'0.3rem'}
                        fontSize={'1.0rem'} 
                        fontFamily={'Courier New, Courier, monospace'}
                    >
                        I've self-published two books. They're on amazon, it's pretty cheap, go there and buy it. NOW!!
                    </Box>
                    <Box   
                        px={{xs: '0.5rem', md: '1rem'}}
                        py={'0.3rem'}
                        fontSize={'1.0rem'} 
                        fontFamily={'Courier New, Courier, monospace'}
                    >
                        Generally speaking, this is just a portfolio. I'm weirder in person.
                    </Box>
                    <Box   
                        px={{xs: '0.5rem', md: '1rem'}}
                        py={'0.5rem'}
                        fontSize={'1.0rem'} 
                        fontFamily={'Courier New, Courier, monospace'}
                    >
                        NOTE: Programmer in spare time. 😎
                    </Box>
                </Box>

        </Box>        
    );
}