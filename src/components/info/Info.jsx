import React, {useState, useEffect} from 'react';
import './Info.css'

const Info = (props) => {

    const [name, setName] = useState("");

    const [mail, setMail] = useState("");
    
    const [numero, setNumero] = useState("");

    useEffect(() => {
        if (name != "" && mail != "" && numero != "") {
            props.setProcede(true)
        } else {
            props.setProcede(false)
        }
    }, [name, mail, numero]);

    return (
        <div className='mainInfo'>

            <div className='titre'>

                <h1>Personal info</h1>
                <p>Please, provide your name, email adress and phone number</p>

            </div>

            <div className='contenu'>

                <div className='name'>
                    <p>Your name is: {name}</p>
                    <input type="text" placeholder='Your Name' onChange={(e) => {setName(e.target.value)}}/>
                </div>

                <div className='mail'>
                    <p>Your email adress is: {mail}</p>
                    <input type="text" placeholder='Your Adress Mail' onChange={(e) => {setMail(e.target.value)}}/>
                </div>

                <div className='phone'>
                    <p>Your phone number is: {numero}</p>
                    <input type="number" placeholder='Your Phone Number' onChange={(e) => {setNumero(e.target.value)}}/>
                </div>

            </div>

        </div>
    );
}

export default Info;
