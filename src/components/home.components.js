import React from 'react';

import {Search} from '../template/search.template';

import './style/home.css';

export const Home = (props)=>(
    <div>
        <div>
            <Search />
        </div>
        <div className="main-books">
            Book
        </div>
    </div>
)