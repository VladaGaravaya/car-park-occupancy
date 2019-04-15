import React from 'react';
import { Link } from 'react-router-dom';

const GoBack = () => (
    <div>
        <Link to="/" className="buttom">&larr; Go back</Link>
    </div>
);

export default GoBack;