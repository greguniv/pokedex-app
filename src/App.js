import './App.css';
import { useContext, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
// Components
import Nav from './components/Nav'
// Pages
import Login from './pages/Login'
import Home from './pages/Home';
import PokemonList from './pages/PokemonList';
import Favorites from './pages/Favorites';
// Contexts
import UserContext from './contexts/UserContext'

const App = () => {
  // In order for us to use our context, we import first, then we can use the useContext hook to access our context
  // const user = useContext(UserContext)
  // console.log(user)

  // We will pass on our user to all of App's children via the Provider value prop
  const [user, setUser] = useState('')
  const [pokeList, setPokeList] = useState([])
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetchPokemon()

    // Dependency Array: if empty, it will call useEffect once when DOM Component loads
  }, [])

  const fetchPokemon = async () => {
    try{
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118')
      setPokeList(res.data.results)

    } catch(error) {
      console.log(error)
    }
  }

  const addToFavorites = (pokemon) => {
    // When we click Like inside Pokemon List, trigger this Function to update our State; send clicked Pokemon back to App
    // App will then pass our State as props to Favorites


    console.log('we added', pokemon)
    setFavorites([...favorites, pokemon])
  }

    // console.log('pokelist', pokeList)

  return (
    <div className="App">
      {/* All context comes with the Provider Component. This allows us to use this as a wrapper and share information with all of its children. We need the value prop inside our provider. */}
      <UserContext.Provider value={user}>
        <Nav />

        {/* We need to wrap our all of our Routes inside react router Routes component */}

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route path='pokemon/list' element={<PokemonList pokeList={pokeList} itemsPerPage={8} addToFavorites={addToFavorites} />} />
          <Route path='favorites' element={<Favorites />} />
        </Routes>

      </UserContext.Provider>
    </div>
  );
}

export default App;
