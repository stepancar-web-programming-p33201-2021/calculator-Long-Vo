import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { styled } from '@mui/material/styles';
import { Container, Box, Paper, Alert } from '@mui/material';

import { CustomParticles } from '../../core/components';
import { MotionContainer, varBounceIn } from '../../core/animate';
import { Screen, Keyboard } from '../components';

const MainContainer = styled(Container)(() => ({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
}));

const JoinPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    margin: theme.spacing(2, 0)
}));

export default function Calculator() {
    const [previousExpression, setPreviousExpression] = useState('3+3');
    const [currentExpression, setCurrentExpression] = useState([]);

    return (
        <>
            <CustomParticles />
            <MainContainer maxWidth="md">
                <Box>
                    <JoinPaper>
                        <MotionContainer initial="initial" open>
                            <motion.div variants={varBounceIn}>
                                <Alert severity="error" color="error" sx={{ mb: 2 }}>
                                    Сервер не подключен!
                                </Alert>
                            </motion.div>
                        </MotionContainer>
                        <Screen previousExpression={previousExpression} currentExpression={currentExpression} />
                        <Keyboard expression={currentExpression} setExpression={setCurrentExpression} />
                    </JoinPaper>
                </Box>
            </MainContainer>
        </>
    );
}
