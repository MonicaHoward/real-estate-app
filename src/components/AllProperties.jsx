import React from 'react';
import { Link } from 'react-router-dom';

import PropertiesList from '../PropertiesList';

const AllProperties = () => {

    return(
        <>
            <h1>High Class Properties</h1>

            {Object.entries(PropertiesList).map(([id, {name, image}]) => (
                <li key={id}>
                    <Link to={`/shop/${id}`}>
                        <p>{name}</p>
                    </Link>
                    <img src={image} alt={name} style={{ width: '250px' }}/>
                </li>
            )) }
        </>
    )
}
export default AllProperties;