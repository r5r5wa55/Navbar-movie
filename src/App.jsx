
import './App.css'
import Home from './assets/page/Home'
import { Provider } from 'react-redux';
import store from './assets/store/store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './assets/page/NoPage';
import Navbar from './assets/page/Navbar';
import Movie from './assets/page/Movie';
function App() {
  
 
  return (
    <>
      <Provider store={store}>
      <BrowserRouter>
        <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="movie" element={<Movie />} />
              <Route path="*" element={<NoPage />} />
       
          </Routes>
        </BrowserRouter>
      </Provider>

  
    </>
  )
}

export default App
