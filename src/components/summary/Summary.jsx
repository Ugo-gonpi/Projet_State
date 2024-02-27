import React from 'react';
import './Summary.css';

const Summary = () => {

    return (
        <div className='mainSummary'>
            <div className='titreSummary'>

                <h1>Finishing up</h1>

                <p>Double-check everything looks OK before confirming</p>

            </div>

            <div className='contenuSummary'>

               <div className='choix'>

                    <div className='optionPrise'>

                        <p>Pro(monthly)</p>

                        <p className='prixs'>$15/mo</p>

                    </div>

                    <hr />
                    
                    <div className='extraAdds'>

                        <p>Online service</p>

                        <p><span>+$1/mo</span></p>

                    </div>

                    <div className='total'>

                        <p>Total (per month)</p>

                        <p><span>$16/mo</span></p>
                        
                    </div>
               </div>
            </div>

        </div>
    );
}

export default Summary;
