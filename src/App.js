import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import axios from 'axios'
import Results from './components/Results'
import OpenMovie from './components/OpenMovie'

function App() {

  const [state, setState] = useState({
    search: "",
    results:[],
    selected:{}
  });

  const omdbAPI = "https://www.omdbapi.com/?apikey=dc7adcd4";
  
  const searchEvent = (inputKey) => {

    if(inputKey.key === "Enter") {
      axios(omdbAPI + "&s=" + state.search).then(({data}) => {
        let results = data.Search;
        setState(prevState => {
          return {...prevState, results: results}
        })
      });
    }
  }

  const handleInput = (enter) => {

    let search = enter.target.value;

    setState(prevState => {
      return {...prevState, search: search}
    });
  }

  const openMovie = id => {
    axios(omdbAPI + "&i=" + id).then(({data})=>{
      let results = data;

      setState(prevState => {
        return {...prevState, selected: results}
      });
    });
  }

  const closeMovie = () => {
    setState(prevState => {
      return {...prevState, selected: {}}
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput = {handleInput} searchEvent = {searchEvent}/>
        <Results results = {state.results} openMovie = {openMovie}/>

    {(typeof state.selected.Title != "undefined") ? <OpenMovie selected = {state.selected} closeMovie = {closeMovie} />: false}
      </main>
    </div>
  );
}

export default App;
