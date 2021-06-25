import React, { useRef } from 'react';
import {Link} from 'react-router-dom';

import './style/search.css';

export const Search = (props)=>{
    const {searchBooks} = props;
    const searchInput = useRef();

    const searchForBooks = ()=>{
        searchBooks(searchInput.current.value);
    }

    const refresh = ()=>{
        searchInput.current.value = "";
        searchBooks()
    }

    return(
        <div className="main-search">
            <input ref={searchInput} type="text" placeholder="Search by book"/>
            <button onClick={()=>searchForBooks()}>Search</button>
            <button onClick={()=>refresh()}>Refresh</button>
            <Link to="/add"><button id="add">Add</button></Link>
        </div>
        );
    }