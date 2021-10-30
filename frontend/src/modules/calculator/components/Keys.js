import React from 'react';
import PropTypes from 'prop-types';

import { styled, Button, Typography, Box } from '@mui/material';

export function NumberKey({ children, onClick }) {
    return (
        <Button variant="outlined" fullWidth onClick={onClick}>
            {children}
        </Button>
    );
}

NumberKey.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func
};

const FunctionButton = styled(Button)(({ theme }) => ({
    fontWeight: 'normal',
    textTransform: 'none',
    background: theme.palette.primary.light
}));

export function FunctionKey({ children, onClick }) {
    return (
        <FunctionButton variant="contained" fullWidth onClick={onClick}>
            {children}
        </FunctionButton>
    );
}

FunctionKey.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func
};

export function RagDegKey({ onClick, isDeg }) {
    return (
        <Button variant="contained" fullWidth onClick={onClick}>
            <Box display="flex" justifyContent="space-evenly" sx={{ width: '100%' }}>
                <Typography color={isDeg ? 'primary.light' : 'default'}>Rag</Typography>
                <Typography color="primary.light">|</Typography>
                <Typography color={isDeg ? 'default' : 'primary.light'}>Deg</Typography>
            </Box>
        </Button>
    );
}

RagDegKey.propTypes = {
    onClick: PropTypes.func,
    isDeg: PropTypes.bool
};

export function InvButton({ onClick, isInv }) {
    return (
        <FunctionButton
            variant="contained"
            fullWidth
            onClick={onClick}
            sx={{ bgcolor: (theme) => theme.palette.primary[isInv ? 'dark' : 'light'] }}
        >
            Inv
        </FunctionButton>
    );
}

InvButton.propTypes = {
    onClick: PropTypes.func,
    isInv: PropTypes.bool
};

export function OperationKey({ children, onClick }) {
    return (
        <Button variant="contained" fullWidth onClick={onClick}>
            {children}
        </Button>
    );
}

OperationKey.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func
};

export function EqualKey({ onClick }) {
    return (
        <Button variant="contained" fullWidth color="secondary" onClick={onClick}>
            =
        </Button>
    );
}

EqualKey.propTypes = {
    onClick: PropTypes.func
};

export function AcKey({ onClick }) {
    return (
        <Button variant="contained" fullWidth color="error" onClick={onClick}>
            AC
        </Button>
    );
}

AcKey.propTypes = {
    onClick: PropTypes.func
};
