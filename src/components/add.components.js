import React, { useRef } from 'react';

import './style/add.css';

export const Add = (props)=>{
    const {addNewBook} = props;
    const formData = useRef();

    const onSubmitForm = async(e)=>{
        e.preventDefault();
        await addNewBook(formData.current)
    }

    return(
        <div className="add-main">
            <div className="add-back">
                <a style={{textDecoration:'none'}} href="/home"><div><h2>🠔</h2></div></a>
            </div>
            <h1>Add a new book</h1>
            <form ref={formData} onSubmit={(e)=> onSubmitForm(e)}>
                <input placeholder="name" name="name" required />
                <input placeholder="genre" name="genre" required />
                <input placeholder="author" name="author" required />
                <input placeholder="publisher" name="publisher" required />
                <input placeholder="cover" name="cover" required />
                <input placeholder="pages" type="number" name="pages" required />
                <input placeholder="language" name="language" required />
                <input placeholder="price: $25.50 > 2550" type="number" name="price" required />
                <input placeholder="year" type="number" name="year" required />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}