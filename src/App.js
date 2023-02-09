import { uploadPosts } from './redux/reducers/postsReducer';
import './App.css';
import { NavBar } from './components/NavBar';
import { Main } from './components/Main';
import { Route, Routes } from 'react-router-dom';


function App() {



  return (
    <div className="App">
    <NavBar/>
    <Main/>
    {/* <Routes>
      <Route path='/' element={<Main/>}/>
    </Routes> */}
    </div>
  );
}

export default App;
