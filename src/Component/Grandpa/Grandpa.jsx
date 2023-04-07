import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

const Grandpa = () => {
    const ring = 'diamond';
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <section className='flex'>
                
                    <Father ring={ring}></Father>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                
            </section>
        </div>
    );
};

export default Grandpa;