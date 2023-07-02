import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import List from './pages/List/list';
import Hotel from './pages/Hotel/hotel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
            <Route exact path = "/" element = { <Home/>} />
            <Route exact path = "/hotels" element = { <List/>} />
            <Route exact path = "/hotels/:id" element = { <Hotel/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
