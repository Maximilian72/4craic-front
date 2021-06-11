import './Facilities.css';
import NewPost from '../NewPost/NewPost'
import React, { useState } from 'react';

function Facilities(){

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        // setShowModal(prev => !prev);
        setShowModal(prev => !prev);
    };

    return(
        <div className='facilities'>
            <input type="text" placeholder="Search posts..."/>
            {showModal 
                ? <NewPost />
                : <></>
            }
            <button className="createThread" onClick={openModal}>Create Thread +</button>
        </div>
    )
}

export default Facilities;