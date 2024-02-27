import React from 'react';
import './Gauche.css'

const Gauche = (props) => {

    return (
        <div className='partieGauche'>

            <div className='firstStep'>
                <button className={`${props.pageOn == 1 ? `active` : `nonActive`}`} >1</button>
                <div className='txt'>
                    <p>STEP 1</p>
                    <h3>YOUR INFO</h3>
                </div>
            </div>

            <div className='steps'>
                <button className={`${props.pageOn == 2 ? `active` : `nonActive`}`}>2</button>
                <div className='txt'>
                    <p>STEP 2</p>
                    <h3>SELECT PLAN</h3>
                </div>
            </div>

            <div className='steps'>
                <button className={`${props.pageOn == 3 ? `active` : `nonActive`}`}>3</button>
                <div className='txt'>
                    <p>STEP 3</p>
                    <h3>ADD-ONS</h3>
                </div>
            </div>

            <div className='steps'>
                <button className={`${props.pageOn == 4 ? `active` : `nonActive`}`}>4</button>
                <div className='txt'>
                    <p>STEP 4</p>
                    <h3>SUMMARY</h3>
                </div>
            </div>

        </div>
    );
}

export default Gauche;
