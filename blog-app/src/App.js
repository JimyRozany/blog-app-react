import './App.css';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Blog/:id' element={<Blog/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
