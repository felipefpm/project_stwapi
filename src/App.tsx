import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home_page'
import { MovieDetail } from './pages/movie_detail'
import { SwapiContextProvider } from './context/swapiContext'

function App() {

  return (
    <BrowserRouter>
      <SwapiContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail/:id" element={<MovieDetail />} />
        </Routes>
      </SwapiContextProvider>
    </BrowserRouter>
  )
}

export default App
