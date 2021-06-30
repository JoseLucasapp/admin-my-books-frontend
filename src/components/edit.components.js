import React, { useEffect, useState } from 'react';

import './style/edit.css';

export const Edit = (props)=>{

    const location = new URL(window.location);
    const id = location.searchParams.get("id");

    const {
        getOneBook,
        bookData,
        editBook,
        setBook
    } = props;

    const data = {
        name: bookData.name,
        genre: bookData.genre,
        author: bookData.author,
        publisher: bookData.publisher,
        cover: bookData.cover,
        pages: bookData.pages,
        language: bookData.language,
        price: bookData.price,
        year: bookData.year,
    }

    useEffect(()=>{
        getOneBook(id);
    },[]);

    const book = bookData;

    const onChangeValue = (field, value)=>{
        data[`${field}`] = value;
        setBook(data);
    }

    const onSubmitForm = async(e)=>{
        e.preventDefault();
        editBook(id, data);
        window.location.href=`/book?id=${id}`;
    }

    return(
        <div className="add-main">
            <div className="add-back">
                <a style={{textDecoration:'none'}} href={`/book?id=${id}`}><div><h2>🠔</h2></div></a>
            </div>
            <h1>Edit book</h1>
            <form onSubmit={(e)=> onSubmitForm(e)}>
                <input onChange={(e)=> onChangeValue("name", e.target.value)} placeholder="name" name="name" value={book.name} required />
                <input onChange={(e)=> onChangeValue("genre", e.target.value)} placeholder="genre" name="genre" value={book.genre} required />
                <input onChange={(e)=> onChangeValue("author", e.target.value)} placeholder="author" name="author" value={book.author} required />
                <input onChange={(e)=> onChangeValue("publisher", e.target.value)} placeholder="publisher" name="publisher" value={book.publisher} required />
                <input onChange={(e)=> onChangeValue("cover", e.target.value)} placeholder="cover" name="cover" value={book.cover} required />
                <input onChange={(e)=> onChangeValue("pages", e.target.value)} placeholder="pages" type="number" name="pages" value={book.pages} required />
                <input onChange={(e)=> onChangeValue("language", e.target.value)} placeholder="language" name="language" value={book.language} required />
                <input onChange={(e)=> onChangeValue("price", e.target.value)} placeholder="price: $25.50 > 2550" type="number" value={book.price} name="price" required />
                <input onChange={(e)=> onChangeValue("year", e.target.value)} placeholder="year" type="number" name="year" value={book.year} required />
                <button type="submit">Save changes</button>
            </form>
        </div>
    );
}