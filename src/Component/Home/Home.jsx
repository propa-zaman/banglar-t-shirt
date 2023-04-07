import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div>
            <h2>T shirt data {tshirts.length}</h2>
        </div>
    );
};

export default Home;