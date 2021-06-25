import {HomeCard} from '../../template/HomeCard.template';

export const renderList = (b)=>{
    const list = b || [];
    return list.map((book, index)=>(
        <HomeCard key={index} id={book._id} name={book.name} cover={book.cover} author={book.author} price={book.price} genre={book.genre}/>
    ));
}