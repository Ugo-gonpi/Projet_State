import React from 'react';
import './AddOns.css'

const AddOns = () => {

    return (

        <div className='mainAdd'>

            <div className='titreAdd'>

                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience</p>

            </div>

            <div className='contenuAdd'>

                <div className='adds' tabIndex={"0"}>

                    <input type="checkbox" className='check'/>

                    <div className='textAdds'>
                        <p className='addsTitle'>Online service</p>
                        <p className='explanation'>Acces to multiplayer games</p>
                    </div>

                   <div className='addedPrice'>

                        <p>
                            +$1/mo
                        </p>
                        
                   </div>

                </div>

                <div className='adds' tabIndex={"0"}>

                    <input type="checkbox" className='check'/>

                    <div className='textAdds'>
                        <p className='addsTitle'>Larger storage</p>
                        <p className='explanation'>Extra 1TB of cloud save</p>
                    </div>

                    <div className='addedPrice'>
                        <p>
                            +$2/mo
                        </p>
                    </div>

                </div>

                <div className='adds' tabIndex={"0"}>

                    <input type="checkbox" className='check'/>

                    <div className='textAdds'>
                        <p className='addsTitle'>Customizable Profile</p>
                        <p className='explanation'>Custom theme on your profile</p>
                    </div>

                    <div className='addedPrice'>
                        <p>
                            +$2/mo
                        </p>
                    </div>
                    
                </div>

            </div>

        </div>
    );
}

export default AddOns;
