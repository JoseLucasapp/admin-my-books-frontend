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
  //await axios.get(`${baseURL}/book/${id}`).then(res => setOneBook(res.data.data)).catch((err)=> window.location.href = '/');

  return (
    <Router>
        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/book">
            <Book 
            getOneBook={getOneBook}
            book={oneBook}/>
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