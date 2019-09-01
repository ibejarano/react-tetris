import React from 'react';
import { StyledStage } from './styles/StyledStage';

import Cell from './Cell';

const Stage = ({ stage }) => (
    <StyledStage width={stage[0].length} height={stage.length}>
        {/* stage is Array(rows)) of Arrays(cols) with [0 ,'clear'] in each individual cell  */}
        {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} /> ))}
    </StyledStage>
)

export default Stage;