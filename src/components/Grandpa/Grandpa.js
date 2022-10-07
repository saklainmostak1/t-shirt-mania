import React, { createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('Matir Ring')

const Grandpa = () => {
    const house = 7;
    // const ring = 'diamond ring'
    return (
       <RingContext.Provider value='Dadir ring'>
         <div className='grandpa'>
            <h2>Grandpa</h2>
            <section className='flex'>
                <Father house={house} ></Father>
                 <Uncle house={house}></Uncle>
                 <Aunty house={house}></Aunty>

            </section>
        </div>
       </RingContext.Provider>
    );
};

export default Grandpa;