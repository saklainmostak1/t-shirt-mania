import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house}) => {
    return (
        <div>
            <h4>My Self</h4>
            <p><small>House: {house} </small></p>
            <section>
                <Special></Special>
            </section>
        </div>
    );
};

export default MySelf;