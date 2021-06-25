import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import axios from "axios";

import {Home} from '../components/home.components';
import {Add} from '../components/add.components';
import { Book } from "../components/book.components";

const baseURL = process.env.REACT_APP_BASE_URL;

export default function App() {
  
  const [books, setBooks] = useState([]);
  const [oneBook, setOneBook] = useState([]);
  
  useEffect(()=>{
    getAllBooks()
  },[]);

  const getAllBooks = (name='')=> axios.get(`${baseURL}/book?name=${name}`).then(res => setBooks(res.data.data)).catch((err)=> window.location.href = '/');

  const getOneBook = async (id)=> {
    try{
      const data = await axios.get(`${baseURL}/book/${id}`);
      return setOneBook(data.data.data);
    }catch(err){
      return window.location.href="/";
    }
  }

  const addNewBook = async(data)=>{
    try{
      await axios.post(`${baseURL}/book`,{
        "name": data.name.value,
        "genre": data.genre.value,
        "author": data.author.value,
        "year": data.year.value,
        "publisher": data.publisher.value,
        "cover": data.cover.value,
        "pages": data.pages.value,
        "language": data.language.value,
        "price": data.price.value,
      });
      return window.location.href="/";
    }catch(err){
      return window.location.href="/";
    }
  }

  const editBook = async(id, data)=>{
    try{
      await axios.put(`${baseURL}/book/${id}`,data);
      return window.location.reload();
    }catch(err){
      return window.location.href="/";
    }
  }

  const removeBook = async(id)=>{
    try{
      await axios.delete(`${baseURL}/book/${id}`);
      return window.location.href="/";
    }catch(err){
      return window.location.href="/";
    }
  }

  return (
    <Router>
        <Switch>
          <Route path="/add">
            <Add 
            addNewBook={addNewBook}/>
          </Route>
          <Route path="/book">
            <Book 
            getOneBook={getOneBook}
            book={oneBook}
            editBook={editBook}
            removeBook={removeBook}/>
          </Route>
          <Route path="*">
            <Home 
            getAllBooks={books}
            searchBooks={getAllBooks}/>
          </Route>
        </Switch>
    </Router>
  );
}