import React from 'react';

import Cell from './Cell';

const Stage = ({ stage }) => (
    <div>
        {/* stage is Array(rows)) of Arrays(cols) with [0 ,'clear'] in each individual cell  */}
        {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} /> ))}
    </div>
)

export default Stage;