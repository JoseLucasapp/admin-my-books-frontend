/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { toBrl } from '../components/actions/toBrl.actions';

import './style/homeCard.css';


export const HomeCard = (props)=>{
    return(
        <div className="homecard-main">
            <div className="homecard-second">
                <div className="bookimage">
                    <a target="blank" href={props.cover}><img src={props.cover}/></a>
                </div>
                <div className="bookdetails">
                    <Link style={{textDecoration:'none'}} to={`/book?id=${props.id}`}><h2>{props.name}</h2></Link>
                    <p>{props.author}</p>
                    <p>{props.genre}</p>
                    <p>{toBrl(props.price)}</p>
                </div>
            </div>
        </div>
    )
}