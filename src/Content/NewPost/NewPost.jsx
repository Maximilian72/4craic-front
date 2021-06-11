import './NewPost.scss';
import React, { useState } from 'react';

function NewPost() {

    const [showModal, setCloseModal] = useState(true);

    const closeModal = () => {
        setCloseModal(prev => !prev);
    };

    return (

        <>
            {showModal === true
                ? 
                <div className="modalContainer" onClick={closeModal}>
                    <form className="modal">
                        <label>Post title:</label>
                        <textarea type="text" name="title" rows="1"/>
                        <label>Post text:</label>
                        <textarea type="text" name="text" rows="5"/>
                        <input type="file" />
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
                :
                null
            }
        </>

    )
} 

export default NewPost;