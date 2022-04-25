import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
function App () {
  return (
    <div className='App'>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie/:imdbID' element={<MovieDetail />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
