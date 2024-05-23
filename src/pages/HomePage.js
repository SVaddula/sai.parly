import React, { useEffect, useState } from 'react';
import API from '../utils/api';

const HomePage = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        API.get('/')
            .then(response => {
                setMessage(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <div>
            <h1>Welcome to MUN Parliamentary Procedures</h1>
            <p>{message}</p>
        </div>
    );
};

export default HomePage;
