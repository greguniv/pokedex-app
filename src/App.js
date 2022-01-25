import './App.css';
import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom'
// Components
import Nav from './components/Nav'
// Pages
import Login from './pages/Login'
// Contexts
import UserContext from './contexts/UserContext'

function App() {
  // In order for us to use our context, we import first, then we can use the useContext hook to access our context
  // const user = useContext(UserContext)
  // console.log(user)

  return (
    <div className="App">
      {/* All context comes with the Provider Component. This allows us to use this as a wrapper and share information with all of its children. We need the value prop inside our provider. */}
      <UserContext.Provider value={'Christina'}>
        <Nav />

        {/* We need to wrap our all of our Routes inside react router Routes component */}

        <Routes>
          <Route path='login' element={<Login />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
