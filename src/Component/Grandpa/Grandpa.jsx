import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

 // 1. create context
export const RingContext = createContext('gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0);

   

    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>has money{money}</p>
            {/* 2. set a provider and paass a value */}
           <MoneyContext.Provider value={[money, setMoney]}>
           <RingContext.Provider value='golden ring'>
           <section className='flex'>
                
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            
        </section>
           </RingContext.Provider>
           </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/****
 * 1. create context and export
 * 2. create a provider and pass a value
 * 3. use useContext to receive the value
 */