import React, {useState, useEffect} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PokemonGrid from "./components/PokemonGrid";
import axios from 'axios'

function App() {

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=50&offset=0'
  const [pokemonList, setPokemonList] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState(url)
  const [prevPageUrl, setPrevPageUrl] = useState(null)
  const [nextPageUrl, setNextPageUrl] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then((res) => {
      setLoading(false)
      setPokemonList(res.data.results.map(x => x.url))
      setPrevPageUrl(res.data.previous)
      setNextPageUrl(res.data.next)
    }).catch((err) => {
      console.log(err)
    })
  }, [currentPageUrl])

  const goToPrevPage = () => {
      setCurrentPageUrl(prevPageUrl)
  }

  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl)
  }

  if(loading) return 'Loading...'

  return (
    <div className="App">
      <Header />
      <PokemonGrid pokemonList={pokemonList} 
        goToPrevPage = {prevPageUrl ? goToPrevPage : null} 
        goToNextPage = {nextPageUrl ? goToNextPage : null}  />
      <Footer />
    </div>
  );
}

export default App;
