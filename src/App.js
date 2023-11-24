import './App.css';
import { AppcontextProvider } from './context/Appcontext';
import { Allblogs } from './pages/Allblogs/Allblogs';
import { Home } from './pages/Homepage/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Blog } from './pages/Showblog.jsx/Blog';
import { Myblogs } from './pages/Myblogs/Myblogs';
import { Createblog } from './pages/CreateBlog/Createblog';
import { Editblog } from './pages/Editblog/Editblog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppcontextProvider>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/blogs' Component={Allblogs} />
            <Route path='/myblogs' Component={Myblogs} />
            <Route path='/blog/:id' Component={Blog} />
            <Route path='/add' Component={Createblog} />
            <Route path='/edit/:id' Component={Editblog} />
          </Routes>
        </AppcontextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
