import React from 'react';
import PropTypes from 'prop-types';

import { styled, Container, Box, Typography } from '@mui/material';

import { fillBracket } from '../../core/utils/parseUtils';

const ScreenContainer = styled(Container)(({ theme }) => ({
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.palette.primary.light,
    borderRadius: theme.spacing(1),
    textAlign: 'right',
    padding: theme.spacing(1),
    ':hover': {
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.lighter
    }
}));

const ResultTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.disabled,
    fontSize: '13px',
    margin: 0,
    padding: 0
}));

const ExpressionTypography = styled(Typography)({
    fontSize: '30px',
    margin: 0,
    padding: 0
});

export default function Screen({ previousExpression, currentExpression }) {
    return (
        <Box padding={1}>
            <ScreenContainer disableGutters>
                <ResultTypography component="p">{`${previousExpression}=`}</ResultTypography>
                <ExpressionTypography
                    component="p"
                    dangerouslySetInnerHTML={{ __html: fillBracket(currentExpression.join('')) }}
                />
            </ScreenContainer>
        </Box>
    );
}

Screen.propTypes = {
    previousExpression: PropTypes.string,
    currentExpression: PropTypes.string
};
