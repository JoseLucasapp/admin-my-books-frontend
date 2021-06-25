import React from 'react';

import {Search} from '../template/search.template';
import {renderList} from './actions/render.actions';

import './style/home.css';

export const Home = (props)=>{
    const {
        getAllBooks,
        searchBooks
    } = props;
    return(
    <div>
        <div>
            <Search searchBooks={searchBooks} />
        </div>
        <div>
            {renderList(getAllBooks)}
        </div>
    </div>
)
}