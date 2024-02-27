import React, {useState, useEffect} from 'react';
import './Droite.css'
import Info from '../info/Info';
import Plan from '../plan/Plan';
import AddOns from '../add-ons/AddOns';
import Summary from '../summary/Summary';
import Thanks from '../thanks/Thanks';

const Droite = (props) => {

    const [page, setPage] = useState(1);
    const [procede, setProcede] = useState(false);

    useEffect(() => {
        props.setPageOn(page)
    }, [page]);

    return (
        <div className='partieDroite'>

            {
                page == 1 ? <Info setProcede={setProcede}/> : ""
            }

            {
                page == 2 ? <Plan /> : ""
            }

            {
                page == 3 ? <AddOns /> : ""
            }

            {
                page == 4 ? <Summary /> : ""
            }

            {
                page == 5 ? <Thanks /> : ""
            }
            
            <div className='buttons'>

                {
                    page == 1 || page == 5 ? "" : <button className='back' onClick={()=> {setPage(page - 1)}}>GO BACK</button>
                }

                {
                    page == 5 ? "" : <button className={`next ${procede == false ? "unclickable" : ""}`} onClick={()=> {setPage(page + 1)}}>NEXT</button>
                }

            </div>

        </div>
    );
}

export default Droite;
