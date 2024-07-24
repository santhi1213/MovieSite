import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import MovieView from './Components/MovieView';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchView from './Components/SearchView';
import { useEffect, useState } from 'react';

function App() {

  const [searchResult, setSearchResult] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(()=>{
    if(searchText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=c9cfa4490f9c6e0cf3e14bca3417d29b&language=en-US&query=${searchText}&include_adult=true&language=en-US&primary_release_year=2019&page=1&region=India&year=2020`)
      .then(response => response.json())
      .then(data => {
      console.log(data)
      setSearchResult(data.results)
      })
    }    
  },[searchText])


  return (
    <div>
      <BrowserRouter>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/search'element={<SearchView keyword={searchText} searchResult={searchResult} />}  />
          <Route path='/movies/:id' element={<MovieView/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
