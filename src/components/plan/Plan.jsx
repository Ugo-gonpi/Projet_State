import React, {useState} from 'react';
import './Plan.css'
import arcade from './../../assets/icon-arcade.svg'
import advanced from './../../assets/icon-advanced.svg'
import pro from './../../assets/icon-pro.svg'

const Plan = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='mainPlan'>
            
            <div className='titrePlan'>

                <h1>Select your plan</h1>

                <p>You have the option to monthly or yearly billing</p>

            </div>

            <div className='contenuPlan'>

                <div className='cards'>

                    <div className='individualCard' tabIndex={"0"}>

                        <img src={arcade} alt="" />

                        <div className='prices'>

                            <p className='planName'>Arcade</p>

                            {
                                toggle == true ? <p className='alternatingPrice'>$90/yr</p> : <p className='alternatingPrice'>$9/mo</p>
                            }

                        </div>
                    </div>

                    <div className='individualCard' tabIndex={"0"}>

                        <img src={advanced} alt="" />

                        <div className='prices'>

                            <p className='planName'>Advanced</p>

                            {
                                toggle == true ? <p className='alternatingPrice'>$120/yr</p> : <p className='alternatingPrice'>$12/mo</p>
                            }

                        </div>
                        
                    </div>

                    <div className='individualCard' tabIndex={"0"}>

                        <img src={pro} alt="" />

                        <div className='prices'>

                            <p className='planName'>Pro</p>

                            {
                                toggle == true ? <p className='alternatingPrice'>$150/yr</p> : <p className='alternatingPrice'>$15/mo</p>
                            }

                        </div>
                    </div>
                </div>

                <div className='slider'>

                    {
                        toggle == true ? <p className='choice'>Monthly</p> : <p>Monthly</p>
                    }

                    <label className="toggle-switch">
                        <input type="checkbox"/>
                        <div className="toggle-switch-background" onClick={() => {setToggle(!toggle)}}>
                            <div className="toggle-switch-handle"></div>
                        </div>
                    </label>
                       
                    {
                        toggle == false ? <p className='choice'>Yearly</p> : <p>Yearly</p>
                    }

                </div>

            </div>
        </div>
    );
}

export default Plan;
