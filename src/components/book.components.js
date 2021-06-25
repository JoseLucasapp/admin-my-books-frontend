/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useEffect } from 'react';
import { toBrl } from './actions/toBrl.actions';
import { Link } from 'react-router-dom';

import './style/book.css'

export const Book = (props)=>{
    const location = new URL(window.location);
    const id = location.searchParams.get("id");
    const {
        getOneBook,
        book,
        editBook,
        removeBook
    } = props;

    useEffect(()=>{
        getOneBook(id);
    },[]);

    const hasBeenReadUpdate = ()=>{
        editBook(id, {
            "hasBeenRead": !book.hasBeenRead
        });
    }

    return(
        <Fragment>
            <div className="book-main">
                <div className="book-topitens">
                    <div className="book-back">
                        <a style={{textDecoration:'none'}} href="/home"><div><h2>🠔</h2></div></a>
                    </div>
                    <div className="book-remove">
                        <div onClick={()=>removeBook(id)}><h2>X</h2></div>
                    </div>
                </div>
                <div className="book-details">
                    <div className="book-name">
                        <h1>{book.name}</h1>
                    </div>
                    <div className="book-data">
                        <div className="book-main-image">
                            <img src={`${book.cover}`}/>
                        </div>
                        <div className="book-main-details">
                            <div className="book-main-details-main">
                                <h3>by {book.author}</h3>
                                <h3>Price {toBrl(book.price)}</h3>
                                <h3>{book.genre}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="book-details-second">
                        <div>
                            <p><b>Publisher</b></p>
                            <p>{book.publisher}</p>
                        </div>
                        <div>
                            <p><b>Pages</b></p>
                            <p>{book.pages}</p>
                        </div>
                        <div>
                            <p><b>Language</b></p>
                            <p>{book.language}</p>
                        </div>
                        <div>
                            <p><b>Publisher date</b></p>
                            <p>{book.year}</p>
                        </div>
                        <div onClick={()=>hasBeenReadUpdate()} className={book.hasBeenRead ? "hasbeenread-yes" : "hasbeenread-no"}>
                            <p><b>Has been read</b></p>
                            <p>{book.hasBeenRead ? 'Yes': 'No'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}