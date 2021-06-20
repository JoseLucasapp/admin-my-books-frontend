import React, { useRef } from 'react';
import {Link} from 'react-router-dom';

import './style/search.css';

export const Search = (props)=>{
    const searchInput = useRef();
    return(
        <div className="main-search">
            <input ref={searchInput} type="text" placeholder="Search by book"/>
            <button>Search</button>
            <Link to="/add"><button id="add">Add</button></Link>
        </div>
        );
    }