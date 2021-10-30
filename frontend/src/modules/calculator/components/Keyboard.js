import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Table, TableBody, TableRow, TableCell, styled } from '@mui/material';

import { AcKey, EqualKey, FunctionKey, InvButton, NumberKey, OperationKey, RagDegKey } from './Keys';
import { fillBracket, fillTag, lastNumber } from '../../core/utils/parseUtils';
import { randomGenerate } from '../../core/utils/formatNumber';
import { calculate } from '../reducers/calculatorReducer';

const CustomCell = styled(TableCell)(({ theme }) => ({
    padding: theme.spacing(1),
    border: 'none'
}));

const CustomSup = styled('sup')({
    position: 'relative',
    bottom: '4px'
});

export default function Keyboard({ expression, setExpression }) {
    const dispatch = useDispatch();
    const { loading, result } = useSelector((state) => state?.calculator?.calculator);

    const [isDeg, setIsDeg] = useState(false);
    const [isInv, setIsInv] = useState(false);

    const switchIsDeg = () => setIsDeg(!isDeg);
    const switchIsInv = () => setIsInv(!isInv);

    const addExpression = (newValue) => {
        setExpression([...expression, fillTag(expression.join(''), newValue) + newValue]);
    };

    const handleSubmit = () => {
        dispatch(
            calculate({
                expression: fillBracket(expression.join(''))
            })
        );
    };

    useEffect(() => {
        if (!loading && result) {
            // setPreviousExpression(expression);
            // setExpression(result);
            alert(result);
        }
    }, [loading, result, setExpression]);

    return (
        <Table>
            <TableBody>
                <TableRow>
                    <CustomCell colSpan={2}>
                        <RagDegKey onClick={switchIsDeg} isDeg={isDeg} />
                    </CustomCell>
                    <CustomCell>
                        <FunctionKey onClick={() => addExpression('!')}>x!</FunctionKey>
                    </CustomCell>
                    <CustomCell>
                        <FunctionKey onClick={() => addExpression('(')}>(</FunctionKey>
                    </CustomCell>
                    <CustomCell>
                        <FunctionKey onClick={() => addExpression(')')}>)</FunctionKey>
                    </CustomCell>
                    <CustomCell>
                        <FunctionKey onClick={() => addExpression('%')}>%</FunctionKey>
                    </CustomCell>
                    <CustomCell>
                        {expression.length > 1 ? (
                            <AcKey onClick={() => setExpression(expression.splice(-1))}>CE</AcKey>
                        ) : (
                            <AcKey onClick={() => setExpression([''])}>AC</AcKey>
                        )}
                    </CustomCell>
                </TableRow>
                <TableRow>
                    <CustomCell>
                        <InvButton onClick={switchIsInv} isInv={isInv}>
                            Inv
                        </InvButton>
                    </CustomCell>
                    <CustomCell>
                        {isInv ? (
                            <FunctionKey onClick={() => addExpression('sin<sup>-1</sup>(')}>
                                sin<CustomSup>-1</CustomSup>
                            </FunctionKey>
                        ) : (
                            <FunctionKey onClick={() => addExpression('sin(')}>sin</FunctionKey>
                        )}
                    </CustomCell>
                    <CustomCell>
                        {isInv ? (
                            <FunctionKey onClick={() => addExpression('e<sup>')}>
                                e<CustomSup>x</CustomSup>
                            </FunctionKey>
                        ) : (
                            <FunctionKey onClick={() => addExpression('ln(')}>ln</FunctionKey>
                        )}
                    </CustomCell>
                    <CustomCell>
                        <NumberKey onClick={() => addExpression('7')}>7</NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <NumberKey onClick={() => addExpression('8')}>8</NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <NumberKey onClick={() => addExpression('9')}>9</NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <OperationKey onClick={() => addExpression('÷')}>÷</OperationKey>
                    </CustomCell>
                </TableRow>
                <TableRow>
                    <CustomCell>
                        <FunctionKey onClick={() => addExpression('π ')}>π</FunctionKey>
                    </CustomCell>
                    <CustomCell>
                        {isInv ? (
                            <FunctionKey onClick={() => addExpression('cos<sup>-1</sup>(')}>
                                cos<CustomSup>-1</CustomSup>
                            </FunctionKey>
                        ) : (
                            <FunctionKey onClick={() => addExpression('cos(')}>cos</FunctionKey>
                        )}
                    </CustomCell>
                    <CustomCell>
                        {isInv ? (
                            <FunctionKey onClick={() => addExpression('10<sup>x</sup>')}>
                                10<CustomSup>x</CustomSup>
                            </FunctionKey>
                        ) : (
                            <FunctionKey onClick={() => addExpression('log(')}>log</FunctionKey>
                        )}
                    </CustomCell>
                    <CustomCell>
                        <NumberKey onClick={() => addExpression('4')}>4</NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <NumberKey onClick={() => addExpression('5')}>5</NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <NumberKey onClick={() => addExpression('6')}>6</NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <OperationKey onClick={() => addExpression('×')}>×</OperationKey>
                    </CustomCell>
                </TableRow>
                <TableRow>
                    <CustomCell>
                        <FunctionKey onClick={() => addExpression('e ')}>e</FunctionKey>
                    </CustomCell>
                    <CustomCell>
                        {isInv ? (
                            <FunctionKey onClick={() => addExpression('tan<sup>-1</sup>(')}>
                                tan<CustomSup>-1</CustomSup>
                            </FunctionKey>
                        ) : (
                            <FunctionKey onClick={() => addExpression('tan(')}>tan</FunctionKey>
                        )}
                    </CustomCell>
                    <CustomCell>
                        {isInv ? (
                            <FunctionKey onClick={() => addExpression('<sup>2</sup>')}>
                                x<CustomSup>2</CustomSup>
                            </FunctionKey>
                        ) : (
                            <FunctionKey onClick={() => addExpression('√(')}>√</FunctionKey>
                        )}
                    </CustomCell>
                    <CustomCell>
                        <NumberKey onClick={() => addExpression('1')}>1</NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <NumberKey onClick={() => addExpression('2')}>2</NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <NumberKey onClick={() => addExpression('3')}>3</NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <OperationKey onClick={() => addExpression('-')}>-</OperationKey>
                    </CustomCell>
                </TableRow>
                <TableRow>
                    <CustomCell>
                        {isInv ? (
                            <FunctionKey onClick={() => addExpression(randomGenerate())}>Rnd</FunctionKey>
                        ) : (
                            <FunctionKey onClick={() => addExpression('Ans')}>Ans</FunctionKey>
                        )}
                    </CustomCell>
                    <CustomCell>
                        <FunctionKey onClick={() => addExpression('E')}>EXP</FunctionKey>
                    </CustomCell>
                    <CustomCell>
                        {/* {isInv ? ( */}
                        {/*    <FunctionKey */}
                        {/*        onClick={() => { */}
                        {/*            setExpression([...expression].splice(-1)); */}
                        {/*            addExpression(`<sup>${lastNumber(expression.join(''))}</sup>√`); */}
                        {/*        }} */}
                        {/*    > */}
                        {/*        <CustomSup>y</CustomSup>√x */}
                        {/*    </FunctionKey> */}
                        {/* ) : ( */}
                        <FunctionKey onClick={() => addExpression('<sup>')}>
                            x<CustomSup>y</CustomSup>
                        </FunctionKey>
                        {/* )} */}
                    </CustomCell>
                    <CustomCell>
                        <NumberKey onClick={() => addExpression('0')}>0</NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <NumberKey
                            onClick={() => {
                                if (lastNumber(expression.join('')).indexOf('.') > -1) return;
                                addExpression('.');
                            }}
                        >
                            .
                        </NumberKey>
                    </CustomCell>
                    <CustomCell>
                        <EqualKey onClick={handleSubmit} />
                    </CustomCell>
                    <CustomCell>
                        <OperationKey onClick={() => addExpression('+')}>+</OperationKey>
                    </CustomCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}

Keyboard.propTypes = {
    expression: PropTypes.array,
    setExpression: PropTypes.func
};
